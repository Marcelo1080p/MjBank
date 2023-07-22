"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("contas", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      conta: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      agencia: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      tipoConta: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      clienteId: {
        type: Sequelize.INTEGER,
        references: { model: "clientes", key: "id"},
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("contas");
  },
};
