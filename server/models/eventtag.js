'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EventTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      EventTag.belongsTo(models.Event, {
        foreignKey: 'eventId'
      });

      EventTag.belongsTo(models.Tag, {
        foreignKey: 'tagId'
      });
    }
  }
  EventTag.init({
    eventId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'EventTag',
  });
  return EventTag;
};