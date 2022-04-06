const User = require('../../Models/user')
const passwordhash = require('password-hash')
const GetToken = require('../../Utils/getToken')

async function Login(email, password) {
  const getUsers = await User.findOne({ where: { email } })

  if (getUsers.password) {
    const passwordPass = passwordhash.verify(password, getUsers.password)

    if (getUsers && passwordPass) {
      GetToken(getUsers.id)
    }
  }

  return false
}

module.exports = Login
