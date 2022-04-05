const User = require('../../models/User')
const passwordhash = require('password-hash')
const { sign } = require('jsonwebtoken')
const { secret_token, expires_in_token } = require('../../config/auth')

async function Login(email, password) {
  const getUsers = await User.findOne({ where: { email } })

  const passwordPass = passwordhash.verify(password, getUsers.password)

  if (getUsers && passwordPass) {
    const token = sign({}, secret_token, {
      subject: getUsers.id,
      expiresIn: expires_in_token
    })

    return {
      token,
      id: getUsers.id
    }
  }

  return false
}

module.exports = Login
