'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sermon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sermon.belongsTo(models.Pastor, { foreignKey: 'pastorId' });
    }
  }
  Sermon.init({
    title: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    description: DataTypes.TEXT,
    youtubeLink: DataTypes.STRING,
    sermonDate: DataTypes.DATE,
    pastorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sermon',
  });
  return Sermon;
};