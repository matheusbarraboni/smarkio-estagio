const Sequelize = require('sequelize')
const database = require('../database/db')

const Comentario = database.define('comentario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    texto: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Comentario;
