const express = require("express");
const routes = express.Router();
const clienteController = require("../../controllers/clienteController");
const contaController = require("../../controllers/contaController");
const enderecoController = require("../../controllers/enderecoController");
const allClienteController = require("../../controllers/allClienteController")

/* CLIENTES */
routes.post("/cliente", clienteController.addCliente);
routes.get("/cliente", clienteController.mostrarClientes);
routes.delete("/cliente/:clienteId", clienteController.exluirCliente);

/* CONTAS */
routes.post("/cliente/:clienteId/contas", contaController.addConta);
routes.get("/cliente/:clienteId/contas", contaController.verConta);

/* ENDEREÇOS */
routes.post("/cliente/:clienteId/enderecos", enderecoController.addEndereco);
routes.get("/cliente/:clienteId/enderecos", enderecoController.verEndereco);


/* VER TUDO */
routes.get("/cliente/allClientes", allClienteController.verTodosDados)

module.exports = routes;