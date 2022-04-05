const Sequelize = require('sequelize')
const { v4: uuid } = require('uuid')
const database = require('../config/db')

const RefreshToken = database.define('refresh_tokens', {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: uuid(),
    primaryKey: true
  },
  user_id: {
    type: Sequelize.STRING,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  token: {
    type: Sequelize.STRING,
    allowNull: false
  },
  expires_date: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = RefreshToken
