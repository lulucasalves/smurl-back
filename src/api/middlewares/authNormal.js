const jwt = require('jsonwebtoken')
const { secret_token } = require('../config/auth')

function decodeToken(req, requireAuth = true) {
  const header = req.request

  if (header) {
    const token = header.replace('Bearer ', '')

    const decoded = jwt.verify(token, secret_token)

    return decoded
  }
  if (requireAuth) {
    return { message: 'Login in to access resource', error: true }
  }

  return null
}

module.exports = decodeToken
