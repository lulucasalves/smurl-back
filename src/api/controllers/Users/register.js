const User = require('../../models/User')
const passwordhash = require('password-hash')

async function Register(user, email, password) {
  const passwordHash = passwordhash.generate(password)

  await User.create({
    user,
    email,
    password: passwordHash
  })
}

module.exports = Register
