const Cliente = require("../models/Cliente");

module.exports = {
  async addCliente( req, res ) {
    const { nome, sobrenome, idade, cpf } = req.body;
    const cliente = await Cliente.create({ nome, sobrenome, idade, cpf });
    return res.json(cliente)
  },

  async mostrarClientes( req, res ){
    const cliente = await Cliente.findAll();
    return res.json(cliente)
  },

  async exluirCliente( req, res) {
    const { clienteId } = req.params;

    await Cliente.destroy({
      where: {
        id: clienteId,
      }
    });

    return res.send(`Cliente com ${clienteId}, deletado`)
  }
}