const Sequelize = require('sequelize')
require('dotenv/config')

const database = new Sequelize(process.env.URL_DB, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: { rejectUnauthorized: false }
  }
})

;(async () => {
  try {
    await database.sync()
  } catch (error) {
    console.log(`database ERROR ${error}`)
  }
})()

module.exports = database
