'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Event.belongsTo(models.User , {foreignKey : "createdByUserId"});
      Event.belongsTo(models.User ,{through : models.EventTag}, {foreignKey : "eventId"});
    }
  }
  Event.init({
    title: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    subDescription: DataTypes.STRING,
    description: DataTypes.TEXT,
    youtubeLink: DataTypes.STRING,
    eventDate: DataTypes.DATE,
    ageGroup: DataTypes.STRING,
    status: DataTypes.STRING,
    createdByUserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};