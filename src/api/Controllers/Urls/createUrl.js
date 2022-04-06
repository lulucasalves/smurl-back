const Url = require('../../Models/url')

async function CreateUrl(name, link, user_id) {
  await Url.create({ user_id, name, link })

  return { error: false, message: 'Url created' }
}

module.exports = CreateUrl
