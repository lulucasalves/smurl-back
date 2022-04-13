const queryString = require('query-string')
require('dotenv/config')
const decodeUriComponent = require('decode-uri-component')
const axios = require('axios')

async function GoogleAuth(unformattedCode) {
  const code = decodeUriComponent(unformattedCode)

  const { data: token } = await axios({
    url: `https://oauth2.googleapis.com/token`,
    method: 'post',
    data: {
      client_id:
        '335515854068-rvno823ke8nn6tcjnsbi22el62dspanu.apps.googleusercontent.com',
      client_secret: process.env.GOOGLE_SECRET,
      redirect_uri: 'https://smurl.com',
      grant_type: 'authorization_code',
      code
    }
  })

  const { data } = await axios({
    url: 'https://www.googleapis.com/oauth2/v2/userinfo',
    method: 'get',
    headers: {
      Authorization: `Bearer ${token.access_token}`
    }
  })

  return data.email
}

module.exports = GoogleAuth
