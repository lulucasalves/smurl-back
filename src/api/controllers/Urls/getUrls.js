const Url = require('../../models/Url')

async function GetUrls(user_id) {
  const getUrls = await Url.findAll({ where: { user_id } })

  return JSON.stringify(getUrls)
}

module.exports = GetUrls
