const Cliente = require("../models/Cliente");
const Conta = require("../models/Conta");
const Endereco = require("../models/Endereco");

/* CLIENTE/ENDEREÇO */
Cliente.hasOne(Endereco, {OnDelete: "CASCADE", onUpdate: "CASCADE"});
Endereco.belongsTo(Cliente, {foreignKey: "clienteId", as: "enderecos"});

/* CLIENTE/CONTA */
Cliente.hasOne(Conta, {OnDelete: "CASCADE", onUpdate: "CASCADE"});
Conta.belongsTo(Cliente, {foreignKey: "clienteId", as: "clientes"});




module.exports = { Cliente, Conta, Endereco };