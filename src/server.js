const app = require('./api/app')
require('dotenv/config')

const port = process.env.PORT || 4002

app.listen({ port }).then(({ url }) => {
  console.log(`Server is running on port ${url}`)
})
