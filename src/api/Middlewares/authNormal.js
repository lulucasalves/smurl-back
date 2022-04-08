const jwt = require('jsonwebtoken')
const { secret_token } = require('../Config/auth')

function DecodeToken(req) {
  const header = req.request

  if (header) {
    const token = header.replace('Bearer ', '')

    const decoded = jwt.verify(token, secret_token)

    return decoded
  }

  return null
}

module.exports = DecodeToken
