const axios = require('axios')
require('dotenv/config')

async function GithubAuth(code) {
  // https://github.com/login/oauthorize?scope=user&client_id=6bad1d24f45824534fd2

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

  const { email } = response.data

  return email
}

module.exports = GithubAuth
