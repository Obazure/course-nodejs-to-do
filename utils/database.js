const Sequelize = require('sequelize')

const DB_NAME = 'nodejs_todo'
const DB_USER = 'root'
const DB_PASSWORD = 'UWSuws00'
const DB_HOST = '127.0.0.1'
const DB_PORT = 3306
const DB_DIALECT = 'mysql'

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT
})


module.exports = sequelize