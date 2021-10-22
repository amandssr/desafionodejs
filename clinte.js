'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clinte extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Clinte.hasMany(models.Pedido);
    }
  };
  Clinte.init({
    nome: DataTypes.STRING,
    endereco: DataTypes.STRING,
    cidade: DataTypes.STRING,
    uf: DataTypes.STRING,
    nascimento: DataTypes.DATEONLY,
    clienteDesde: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Clinte',
  });
  return Clinte;
};