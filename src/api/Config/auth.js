require('dotenv/config')

module.exports = {
  secret_token: process.env.SECRET_TOKEN,
  expires_in_token: process.env.EXPIRES_TOKEN
}
