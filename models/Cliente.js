const { DataTypes } = require("sequelize");
const dataBase = require("../config/database");

const Cliente = dataBase.define("clientes", {
  nome: DataTypes.STRING,
  sobrenome: DataTypes.STRING,
  idade: DataTypes.INTEGER,
  cpf: DataTypes.STRING,
});

module.exports = Cliente;