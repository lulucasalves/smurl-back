const queryString = require('query-string')
require('dotenv/config')
const axios = require('axios')

async function FacebookAuth(code) {
  const stringifiedParams = queryString.stringify({
    client_id: '505575514434067',
    redirect_uri: 'https://smurl.com/',
    scope: 'email',
    response_type: 'code'
  })

  const facebookLoginUrl = `https://www.facebook.com/v4.0/dialog/oauth?${stringifiedParams}`

  console.log(facebookLoginUrl)

  const { data: token } = await axios({
    url: 'https://graph.facebook.com/v4.0/oauth/access_token',
    method: 'get',
    params: {
      client_id: '505575514434067',
      client_secret: process.env.FACEBOOK_SECRET,
      redirect_uri: 'https://smurl.com/',
      code
    }
  })

  const { data } = await axios({
    url: 'https://graph.facebook.com/me',
    method: 'get',
    params: {
      fields: 'email',
      access_token: token.access_token
    }
  })

  return data.email
}

module.exports = FacebookAuth
