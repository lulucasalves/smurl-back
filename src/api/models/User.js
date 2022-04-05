const Sequelize = require('sequelize')
const { v4: uuid } = require('uuid')
const database = require('../config/db')

const User = database.define('users', {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: uuid(),
    primaryKey: true
  },
  user: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ''
  },
  confirmed: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  number_urls: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
})

module.exports = User
