const Cliente = require("../models/Cliente");
const Conta = require("../models/Conta");
const Endereco = require("../models/Endereco");

module.exports = {
  async verTodosDados( req, res ){
   
    const cliente = await Cliente.findAll({
      include: [
        {
          model: Conta,
        },
        {
          model: Endereco,
        }
      ]
    });
    return res.json(cliente);
  }
}