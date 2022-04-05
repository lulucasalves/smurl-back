const User = require('../../models/User')

async function GetUsers(id) {
  const getUsers = await User.findOne({ where: { id } })

  return JSON.stringify(getUsers)
}

module.exports = GetUsers
