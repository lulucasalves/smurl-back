const User = require('../../Models/user')
const passwordhash = require('password-hash')

async function ChangePassword(id, oldPassword, newPassword) {
  const getUsers = await User.findOne({ where: { id } })

  const passwordPass = passwordhash.verify(oldPassword, getUsers.password)
  const password = passwordhash.generate(newPassword)

  if (passwordPass) {
    await User.update({ password }, { where: { id } })

    return { error: false, message: 'password changed' }
  }

  return { error: true, message: 'user not exist' }
}

module.exports = ChangePassword
