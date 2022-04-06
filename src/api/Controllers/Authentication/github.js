const User = require('../../Models/user')
const GithubAuth = require('../../Middlewares/authGithub')
const GetToken = require('../../Utils/getToken')

async function GithubLogin(code) {
  const email = await GithubAuth(code)

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

module.exports = GithubLogin
