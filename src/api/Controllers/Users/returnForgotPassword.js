const User = require('../../Models/user')
const passwordhash = require('password-hash')

async function ReturnForgotPassword(id, newPassword) {
  const getUsers = await User.findOne({ where: { id } })

  const passwordHash = passwordhash.generate(newPassword)

  if (getUsers.password) {
    await User.update({ password: passwordHash }, { where: { id } })

    return { error: false, message: 'password changed' }
  }

  return { error: true, message: 'user not exist' }
}

module.exports = ReturnForgotPassword
