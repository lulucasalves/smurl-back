const app = require('./api/app')
const FacebookAuth = require('./api/Middlewares/authFacebook')
require('dotenv/config')

const port = process.env.PORT || 4002

app.listen({ port }).then(({ url }) => {
  console.log(`Server is running on port ${url}`)
})
