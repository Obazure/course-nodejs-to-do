const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const task = sequelize.define('Task', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    done: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }
})


module.exports = task
