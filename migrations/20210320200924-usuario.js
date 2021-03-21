'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuario', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
      },
      nome: {
        type: Sequelize.STRING(192),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(192),
        allowNull: false
      },
      documento: {
        type: Sequelize.STRING(192),
        allowNull: true
      },
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: true
      },      
      senha: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      login: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      tipo_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },
      token:{
        type: Sequelize.STRING(50),
      },
      created_at: {
        type: Sequelize.STRING(50),
        allowNull: true
      },
      updated_at: {
        type: Sequelize.STRING(50),
        allowNull: true
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuario')
  }
};