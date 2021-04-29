const dotenv = require('dotenv')
dotenv.config()

const env = process.env

const Sequelize = require('sequelize')
const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASSWORD, {dialect: 'mysql', host: 'localhost'})

module.exports = sequelize
