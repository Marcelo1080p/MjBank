const Cliente = require("../models/Cliente");
const Conta = require("../models/Conta");

module.exports = {
  async addConta( req, res ) {
    const { clienteId } = req.params;
    const { conta, agencia, tipoConta } = req.body;

    const cliente = await Cliente.findByPk(clienteId);

    if(!cliente) {
      res.send("Esse cliente não existe!")
    };
    const contaDados = await Conta.create({conta, agencia, tipoConta, clienteId});
    return res.json(contaDados);
  },

  async verConta( req, res ) {
    const { clienteId } = await req.params;

    if(!clienteId) {
      res.send("Essa cliente não existe");
    }

    const cliente = await Cliente.findByPk(clienteId, {
      include: Conta,
    });

    return res.json(cliente);
  }
}