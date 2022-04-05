const User = require('../../models/User')

async function DeleteUser(id) {
  await User.delete({ where: id })
}

module.exports = DeleteUser
