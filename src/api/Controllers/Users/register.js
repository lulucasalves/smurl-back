const User = require('../../Models/user')
const passwordhash = require('password-hash')
const GetToken = require('../../Utils/getToken')

async function Register(email, password) {
  const passwordHash = passwordhash.generate(password)

  await User.create({ email, password: passwordHash })

  const createdUser = await User.findOne({ where: { email } })

  return GetToken(createdUser.id)
}

module.exports = Register
