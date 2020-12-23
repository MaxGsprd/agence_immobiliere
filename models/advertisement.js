'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Advertisement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Advertisement.belongsTo(models.Realtor);
      Advertisement.belongsTo(models.Property);
      Advertisement.belongsTo(models.Buyer);
    }
  };
  Advertisement.init({
    name: DataTypes.STRING,
    sellingStatus: DataTypes.STRING,
    forSaleSince: DataTypes.DATE,
    saleDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Advertisement',
  });
  return Advertisement;
};