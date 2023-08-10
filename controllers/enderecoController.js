const Cliente = require("../models/Cliente");
const Endereco = require("../models/Endereco");

module.exports = {
  async addEndereco( req, res ) {
    const { clienteId } = req.params;
    const { rua, numeroCasa, complemento, bairro, cidade, estado, pais, cep } = req.body;

    const cliente = await Cliente.findByPk(clienteId);

    if(!cliente) {
      res.send("Esse cliente não existe!");
    };
    
    const endereco = Endereco.create({ rua, numeroCasa, complemento, bairro, cidade, estado, pais, cep, clienteId });

    return res.json(endereco);
  },

  async verEndereco( req, res ) {
    const { clienteId } = await req.params;

    
    if(!clienteId) {
      res.send("Esse cliente não existe!");
    }
    const cliente = await Cliente.findByPk(clienteId, {
      include: Endereco
    });
    return res.json(cliente)
  }
}