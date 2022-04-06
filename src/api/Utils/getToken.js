const { sign } = require('jsonwebtoken')
const { secret_token, expires_in_token } = require('../Config/auth')

function GetToken(id) {
  if (id) {
    const token = sign({}, secret_token, {
      subject: id,
      expiresIn: expires_in_token
    })

    return { token, id }
  }

  return null
}

module.exports = GetToken
