const FacebookAuth = require('../../Middlewares/authFacebook')
const User = require('../../Models/user')
const GetToken = require('../../Utils/getToken')

async function FacebookLogin(code) {
  const { email } = await FacebookAuth(code)

  const getUsers = await User.findOne({ where: { email } })

  if (getUsers) {
    return GetToken(getUsers.id)
  } else {
    await User.create({
      email,
      confirmed: true
    })

    const createdUser = await User.findOne({ where: { email } })

    return GetToken(createdUser.id)
  }
}

module.exports = FacebookLogin
