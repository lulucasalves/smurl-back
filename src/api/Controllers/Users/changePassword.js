const User = require('../../Models/user')
const passwordhash = require('password-hash')

async function ChangePassword(id, oldPassword, newPassword) {
  const getUsers = await User.findOne({ where: { id } })

  if (getUsers.password) {
    const passwordPass = passwordhash.verify(oldPassword, getUsers.password)

    if (passwordPass) {
      await User.update({ password: newPassword }, { where: { id } })
    }
  } else {
    await User.update({ password: newPassword }, { where: { id } })
  }

  return
}

module.exports = ChangePassword
