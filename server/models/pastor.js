'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pastor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pastor.hasMany(models.Sermon, { foreignKey: 'pastorId' });
    }
  }
  Pastor.init({
    name: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    position: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pastor',
  });
  return Pastor;
};