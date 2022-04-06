const User = require('../../Models/user')

async function EditUser(id, email, phone) {
  await User.update({ email, phone }, { where: { id } })

  return { error: false, message: 'Account edited' }
}

module.exports = EditUser
