const queryString = require('query-string')
require('dotenv/config')
const decodeUriComponent = require('decode-uri-component')
const axios = require('axios')

async function GoogleAuth(unformattedCode) {
  // const stringifiedParams = queryString.stringify({
  //   client_id:
  //     '335515854068-rvno823ke8nn6tcjnsbi22el62dspanu.apps.googleusercontent.com',
  //   redirect_uri: 'https://smurl.com',
  //   scope: [
  //     'https://www.googleapis.com/auth/userinfo.email',
  //     'https://www.googleapis.com/auth/userinfo.profile'
  //   ].join(' '),
  //   response_type: 'code'
  // })

  // const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`

  // console.log(googleLoginUrl)

  //https://accounts.google.com/o/oauth2/v2/auth?client_id=335515854068-rvno823ke8nn6tcjnsbi22el62dspanu.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fsmurl.com&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile

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
