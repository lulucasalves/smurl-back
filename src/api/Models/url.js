const Sequelize = require('sequelize')
const { v4: uuid } = require('uuid')
const database = require('../Config/db')

const Url = database.define('urls', {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: uuid(),
    primaryKey: true,
    unique: true
  },
  user_id: {
    type: Sequelize.STRING,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  link: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
})

module.exports = Url
