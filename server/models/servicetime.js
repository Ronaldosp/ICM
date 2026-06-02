'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServiceTime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ServiceTime.belongsTo(models.Location, { foreignKey: 'locationId' });
    }
  }
  ServiceTime.init({
    locationId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    time: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'ServiceTime',
  });
  return ServiceTime;
};