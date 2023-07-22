const dataBase = require("../config/database");
const DataTypes = require("sequelize");

const Endereco = dataBase.define("enderecos", {
  rua: DataTypes.STRING,
  numeroCasa: DataTypes.STRING,
  complemento: DataTypes.STRING,
  bairro: DataTypes.STRING,
  cidade: DataTypes.STRING,
  estado: DataTypes.STRING,
  pais: DataTypes.STRING,
  cep: DataTypes.STRING,
  clienteId: DataTypes.INTEGER,
});

module.exports = Endereco;