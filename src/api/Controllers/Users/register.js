const User = require('../../Models/user')
const passwordhash = require('password-hash')
const GetToken = require('../../Utils/getToken')
const { v4: uuid } = require('uuid')

async function Register(email, password) {
  const passwordHash = passwordhash.generate(password)
  const id = uuid()

  await User.create({ id, email, password: passwordHash })

  return GetToken(id)
}

module.exports = Register
