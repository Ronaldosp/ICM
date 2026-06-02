/*



npx sequelize-cli model:generate --name User --attributes username:string,email:string,passwordHash:string,role:string

npx sequelize-cli model:generate --name Pastor --attributes name:string,thumbnail:string,position:string,description:text,status:string

npx sequelize-cli model:generate --name Event --attributes title:string,thumbnail:string,subDescription:string,description:text,youtubeLink:string,eventDate:date,ageGroup:string,status:string,createdByUserId:integer

npx sequelize-cli model:generate --name Article --attributes title:string,thumbnail:string,excerpt:string,content:text,authorId:integer,publishedDate:date,status:string

npx sequelize-cli model:generate --name Tag --attributes name:string

npx sequelize-cli model:generate --name EventTag --attributes eventId:integer,tagId:integer

npx sequelize-cli model:generate --name Location --attributes name:string,address:string,description:text

npx sequelize-cli model:generate --name ServiceTime --attributes locationId:integer,title:string,time:time

npx sequelize-cli model:generate --name AdminLink --attributes title:string,url:string,icon:string

npx sequelize-cli model:generate --name Sermon --attributes title:string,thumbnail:string,description:text,youtubeLink:string,sermonDate:date,pastorId:integer


*/