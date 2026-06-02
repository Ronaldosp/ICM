const express = require('express');
const app = express();
const port = 3000;
const cors = require("cors");
const {  User  , Tag , ServiceTime , Sermon , Pastor , Location , EventTag , Event , Article , AdminLink } = require('./models');
const { comparePassword } = require('./helpers/bcrypt');
const { signToken } = require('./helpers/jwt');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post('/register',async(req , res)=>{
  try {
    const {username, email , role, password} = req.body;
    const user = await User.create({ username, email, role, password });
    res.status(201).json({ id: user.id, email: user.email });
  } catch (error) {
    if (
      error.name === "SequelizeValidationError" ||
      error.name === "SequelizeUniqueConstraintError"
    ) {
      res.status(400).json({ message: error.errors[0].message });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
    console.log(error);
  }
});

app.post('/login', async(req , res)=>{
  try {
    const {email , password} = req.body;
    console.log(req.body);
    
    const user = await User.findOne({where : {email}});
    if(!user){
      throw { message : "UserNotFound" };
    }

    const passValid = comparePassword(password , user.password);
    if(!passValid){
      throw { message : "UserNotFound"};
    }
    const token = signToken({ id: user.id , email: user.email , role: user.role})
    res.status(200).json({ access_token: token });
  } catch (error) {
    console.log(error);
    if (error.name === "SequelizeValidationError") {
      res.status(400).json({ message: error.errors[0].message });
    } else if (error.message === "UserNotFound") {
      res.status(500).json({ message: "Invalid email/password" });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
});

//Tags
app.get('/tags', async(req , res)=>{
  try {
    const tag = await Tag.findAll();
    res.status(200).json(tag)
  } catch (error) {
    console.log(error)
    res.status(500).json({message: "Internal Server Error"})
  }
});

app.get('/tags/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id);

    if (!tag) {
      return res.status(404).json({ message: "tag Not Found" });
    }

    res.status(200).json(tag);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post('/tags', async(req,res)=>{
  try {
    console.log(req.body);
    
    const {name} = req.body;
    const tag = await Tag.create({name})
    console.log(tag);
    res.status(201).json(`Created New tag ${name}`)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.put('/tags/:id', async(req,res)=>{
  try {
    const {id} = req.params
    const {name} = req.body
    const tag = await Tag.update(
      {name},
      {where :{id : id}}
    )
    if(!tag){
      return {message:'NotFound'}
    }
    res.status(200).json({message : "tag has been Updated"})
  } catch (error) {
    if (error.name === "NotFound") {
      res.status(404).json({ message: "Category Not Found" });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
});

app.delete('/tags/:id' , async(req,res)=>{
  try {
    const {id} = req.params
    const tag = await Tag.findByPk(id)
    if(!tag){
      throw {message : 'NotFound'}
    }
    await tag.destroy({where :{id}})
    res.status(200).json({message : "tag Deleted"})
  } catch (error) {
    console.log(error);
  }
});
// End Tags

//Events
app.get('/events', async(req , res)=>{
  try {
    const event = await Event.findAll({include: [{model: Tag}]});
    res.status(200).json(event)
  } catch (error) {
    console.log(error)
    res.status(500).json({message: "Internal Server Error"})
  }
});

app.get('/events/:id', async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id, {include: [{ model: Tag }]});

    if (!event) {
      return res.status(404).json({ message: "Event Not Found" });
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post('/events', async(req,res)=>{
  try {
    console.log(req.body);
    
    const {title , thumbnail , subDescription , description , youtubeLink , eventDate , ageGroup , status , createdByUserId , tagIds} = req.body;
    const event = await Event.create({title , thumbnail , subDescription , description , youtubeLink , eventDate , ageGroup , status , createdByUserId})
    if (tagIds?.length) {
        await event.setTags(tagIds);
    }
    console.log(event);
    res.status(201).json(event)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.put('/events/:id', async(req,res)=>{
  try {
    const {id} = req.params
    const {title , thumbnail , subDescription , description , youtubeLink , eventDate , ageGroup , status , createdByUserId , tagIds} = req.body

    const event = await Event.findByPk(id);

    if(!event){
      return {message:'NotFound'}
    }
    
    await Event.update(
      {title , thumbnail , subDescription , description , youtubeLink , eventDate , ageGroup , status , createdByUserId} 
    )

    if (tagIds) {
        await event.setTags(tagIds);
    }

    
    res.status(200).json({message : "event has been Updated"})
  } catch (error) {
    if (error.name === "NotFound") {
      res.status(404).json({ message: "Category Not Found" });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
});

app.delete('/events/:id' , async(req,res)=>{
  try {
    const {id} = req.params
    const event = await Event.findByPk(id)
    if(!event){
      throw {message : 'NotFound'}
    }
    await Event.destroy({where :{id}})
    res.status(200).json({message : "event Deleted"})
  } catch (error) {
    console.log(error);
  }
});
// End Events

// Articles
app.get('/articles', async(req , res)=>{
  try {
    const article = await Article.findAll();
    res.status(200).json(article)
  } catch (error) {
    console.log(error)
    res.status(500).json({message: "Internal Server Error"})
  }
});

app.get('/articles/:id', async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id);

    if (!article) {
      return res.status(404).json({ message: "article Not Found" });
    }

    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post('/articles', async(req,res)=>{
  try {
    console.log(req.body);
    
    const {title , thumbnail , excerpt , content , authorId , publishedDate , status } = req.body;
    const article = await Article.create({title , thumbnail , excerpt , content , authorId , publishedDate , status })
    console.log(article);
    res.status(201).json(`Created New article ${title}`)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.put('/articles/:id', async(req,res)=>{
  try {
    const {id} = req.params
    const {title , thumbnail , excerpt , content , authorId , publishedDate , status } = req.body
    const article = await Article.update(
      {title , thumbnail , excerpt , content , authorId , publishedDate , status },
      {where :{id : id}}
    )
    if(!article){
      return {message:'NotFound'}
    }
    res.status(200).json({message : "article has been Updated"})
  } catch (error) {
    if (error.name === "NotFound") {
      res.status(404).json({ message: "Category Not Found" });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
});

app.delete('/articles/:id' , async(req,res)=>{
  try {
    const {id} = req.params
    const article = await Article.findByPk(id)
    if(!article){
      throw {message : 'NotFound'}
    }
    await Article.destroy({where :{id}})
    res.status(200).json({message : "article Deleted"})
  } catch (error) {
    console.log(error);
  }
});
// End Articles

//Location
app.get('/locations', async(req , res)=>{
  try {
    const location = await Location.findAll({include: [{model: ServiceTime}]});
    res.status(200).json(location)
  } catch (error) {
    console.log(error)
    res.status(500).json({message: "Internal Server Error"})
  }
});

app.get('/locations/:id', async (req, res) => {
  try {
    const location = await Location.findByPk(req.params.id ,{include: [{model: ServiceTime}]});

    if (!location) {
      return res.status(404).json({ message: "location Not Found" });
    }

    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post('/locations', async(req,res)=>{
  try {
    console.log(req.body);
    
    const {name , address , description} = req.body;
    const location = await Location.create({name , address , description})
    console.log(location);
    res.status(201).json(`Created New location ${name}`)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.put('/locations/:id', async(req,res)=>{
  try {
    const {id} = req.params
    const {name , address , description} = req.body
    const location = await Location.update(
      {name , address , description},
      {where :{id : id}}
    )
    if(!location){
      return {message:'NotFound'}
    }
    res.status(200).json({message : "location has been Updated"})
  } catch (error) {
    if (error.name === "NotFound") {
      res.status(404).json({ message: "Category Not Found" });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
});

app.delete('/locations/:id' , async(req,res)=>{
  try {
    const {id} = req.params
    const location = await Location.findByPk(id)
    if(!location){
      throw {message : 'NotFound'}
    }
    await Location.destroy({where :{id}})
    res.status(200).json({message : "location Deleted"})
  } catch (error) {
    console.log(error);
  }
});
//End Location

//Service Time
app.get('/service-times', async(req , res)=>{
  try {
    const serviceTime = await ServiceTime.findAll();
    res.status(200).json(serviceTime)
  } catch (error) {
    console.log(error)
    res.status(500).json({message: "Internal Server Error"})
  }
});

app.get('/service-times/:id', async (req, res) => {
  try {
    const serviceTime = await ServiceTime.findByPk(req.params.id);

    if (!serviceTime) {
      return res.status(404).json({ message: "serviceTime Not Found" });
    }

    res.status(200).json(serviceTime);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post('/service-times', async(req,res)=>{
  try {
    console.log(req.body);
    
    const {locationId , title , time} = req.body;
    const serviceTime = await ServiceTime.create({locationId , title , time})
    console.log(serviceTime);
    res.status(201).json(`Created New serviceTime ${title}`)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.put('/service-times/:id', async(req,res)=>{
  try {
    const {id} = req.params
    const {locationId , title , time} = req.body
    const serviceTime = await ServiceTime.update(
      {locationId , title , time},
      {where :{id : id}}
    )
    if(!serviceTime){
      return {message:'NotFound'}
    }
    res.status(200).json({message : "serviceTime has been Updated"})
  } catch (error) {
    if (error.name === "NotFound") {
      res.status(404).json({ message: "Category Not Found" });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
});

app.delete('/service-times/:id' , async(req,res)=>{
  try {
    const {id} = req.params
    const serviceTime = await ServiceTime.findByPk(id)
    if(!serviceTime){
      throw {message : 'NotFound'}
    }
    await ServiceTime.destroy({where :{id}})
    res.status(200).json({message : "serviceTime Deleted"})
  } catch (error) {
    console.log(error);
  }
});
//End Service Time

// Pastor
app.get('/pastors', async(req , res)=>{
  try {
    const pastor = await Pastor.findAll({include: [{model: Sermon}]});
    res.status(200).json(pastor)
  } catch (error) {
    console.log(error)
    res.status(500).json({message: "Internal Server Error"})
  }
});

app.get('/pastors/:id', async (req, res) => {
  try {
    const pastor = await Pastor.findByPk(req.params.id , {include: [{model: Sermon}]});

    if (!pastor) {
      return res.status(404).json({ message: "pastor Not Found" });
    }

    res.status(200).json(pastor);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post('/pastors', async(req,res)=>{
  try {
    console.log(req.body);
    
    const {name , thumbnail , position , description , status} = req.body;
    const pastor = await Pastor.create({name , thumbnail , position , description , status})
    console.log(pastor);
    res.status(201).json(`Created New pastor ${name}`)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.put('/pastors/:id', async(req,res)=>{
  try {
    const {id} = req.params
    const {name , thumbnail , position , description , status} = req.body
    const pastor = await Pastor.update(
      {name , thumbnail , position , description , status},
      {where :{id : id}}
    )
    if(!pastor){
      return {message:'NotFound'}
    }
    res.status(200).json({message : "pastor has been Updated"})
  } catch (error) {
    if (error.name === "NotFound") {
      res.status(404).json({ message: "Category Not Found" });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
});

app.delete('/pastors/:id' , async(req,res)=>{
  try {
    const {id} = req.params
    const pastor = await Pastor.findByPk(id)
    if(!pastor){
      throw {message : 'NotFound'}
    }
    await Pastor.destroy({where :{id}})
    res.status(200).json({message : "pastor Deleted"})
  } catch (error) {
    console.log(error);
  }
});
// End Pastor

// Sermon
app.get('/sermons', async(req , res)=>{
  try {
    const sermon = await Sermon.findAll();
    res.status(200).json(sermon)
  } catch (error) {
    console.log(error)
    res.status(500).json({message: "Internal Server Error"})
  }
});

app.get('/sermons/:id', async (req, res) => {
  try {
    const sermon = await Sermon.findByPk(req.params.id);

    if (!sermon) {
      return res.status(404).json({ message: "sermon Not Found" });
    }

    res.status(200).json(sermon);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post('/sermons', async(req,res)=>{
  try {
    console.log(req.body);
    
    const {title , thumbnail , description , youtubeLink , sermonDate , pastorId} = req.body;
    const sermon = await Sermon.create({title , thumbnail , description , youtubeLink , sermonDate , pastorId})
    console.log(sermon);
    res.status(201).json(`Created New sermon ${title}`)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.put('/sermons/:id', async(req,res)=>{
  try {
    const {id} = req.params
    const {title , thumbnail , description , youtubeLink , sermonDate , pastorId} = req.body
    const sermon = await Sermon.update(
      {title , thumbnail , description , youtubeLink , sermonDate , pastorId},
      {where :{id : id}}
    )
    if(!sermon){
      return {message:'NotFound'}
    }
    res.status(200).json({message : "sermon has been Updated"})
  } catch (error) {
    if (error.name === "NotFound") {
      res.status(404).json({ message: "Category Not Found" });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
});

app.delete('/sermons/:id' , async(req,res)=>{
  try {
    const {id} = req.params
    const sermon = await Sermon.findByPk(id)
    if(!sermon){
      throw {message : 'NotFound'}
    }
    await Sermon.destroy({where :{id}})
    res.status(200).json({message : "sermon Deleted"})
  } catch (error) {
    console.log(error);
  }
});
// End Sermon

// Admin Link
app.get('/admin-links', async(req , res)=>{
  try {
    const adminLink = await AdminLink.findAll();
    res.status(200).json(adminLink)
  } catch (error) {
    console.log(error)
    res.status(500).json({message: "Internal Server Error"})
  }
});

app.get('/admin-links/:id', async (req, res) => {
  try {
    const adminLink = await AdminLink.findByPk(req.params.id);

    if (!adminLink) {
      return res.status(404).json({ message: "adminLink Not Found" });
    }

    res.status(200).json(adminLink);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post('/admin-links', async(req,res)=>{
  try {
    console.log(req.body);
    
    const {title , url , icon } = req.body;
    const adminLink = await AdminLink.create({title , url , icon })
    console.log(adminLink);
    res.status(201).json(`Created New adminLink ${title}`)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.put('/admin-links/:id', async(req,res)=>{
  try {
    const {id} = req.params
    const {title , url , icon } = req.body
    const adminLink = await AdminLink.update(
      {title , url , icon },
      {where :{id : id}}
    )
    if(!adminLink){
      return {message:'NotFound'}
    }
    res.status(200).json({message : "adminLink has been Updated"})
  } catch (error) {
    if (error.name === "NotFound") {
      res.status(404).json({ message: "Category Not Found" });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
});

app.delete('/admin-links/:id' , async(req,res)=>{
  try {
    const {id} = req.params
    const adminLink = await AdminLink.findByPk(id)
    if(!adminLink){
      throw {message : 'NotFound'}
    }
    await AdminLink.destroy({where :{id}})
    res.status(200).json({message : "adminLink Deleted"})
  } catch (error) {
    console.log(error);
  }
});
// End Admin Link