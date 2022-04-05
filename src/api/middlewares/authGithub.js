const axios = require('axios')
const User = require('../models/User')
const { sign } = require('jsonwebtoken')
require('dotenv/config')
const { secret_token, expires_in_token } = require('../config/auth')

async function GithubAuth(code) {
  // https://github.com/login/oauth/authorize?scope=user&client_id=6bad1d24f45824534fd2

  const url = 'https://github.com/login/oauth/access_token'

  const { data: accessTokenResponse } = await axios.post(url, null, {
    params: {
      client_id: '6bad1d24f45824534fd2',
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code
    },
    headers: { Accept: 'application/json' }
  })

  const response = await axios.get('https://api.github.com/user', {
    headers: {
      authorization: `Bearer ${accessTokenResponse.access_token}`
    }
  })

  const { login: user, email } = response.data

  const getUsers = await User.findOne({ where: { email, user } })

  if (getUsers) {
    const token = sign({}, secret_token, {
      subject: getUsers.id,
      expiresIn: expires_in_token
    })

    return {
      token,
      id: getUsers.id
    }
  } else {
    await User.create({
      user,
      email,
      confirmed: true
    })

    const createUser = await User.findOne({ where: { email, user } })

    const token = sign({}, secret_token, {
      subject: createUser.id,
      expiresIn: expires_in_token
    })

    return {
      token,
      id: createUser.id
    }
  }
}

module.exports = GithubAuth
