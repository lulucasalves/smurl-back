const GoogleAuth = require('../../Middlewares/authGoogle')
const User = require('../../Models/user')
const GetToken = require('../../Utils/getToken')

async function GoogleLogin(code) {
  const email = await GoogleAuth(code)

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

module.exports = GoogleLogin
