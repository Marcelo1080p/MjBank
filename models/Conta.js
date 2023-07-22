const dataBase = require("../config/database");
const { DataTypes } = require("sequelize");

const Conta = dataBase.define("contas", {
  conta: DataTypes.INTEGER,
  agencia: DataTypes.INTEGER,
  tipoConta: DataTypes.STRING,
  clienteId: DataTypes.INTEGER
});

module.exports = Conta;