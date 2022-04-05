const Url = require('../../models/Url')

async function CreateUrl(name, link, user_id) {
  await Url.create({ user_id, name, link })

  return { name, link }
}

module.exports = CreateUrl
