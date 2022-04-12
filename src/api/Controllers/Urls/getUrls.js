const Url = require('../../Models/url')

async function GetUrls(user_id) {
  const getUrls = await Url.findAll({ where: { user_id } })


  return JSON.stringify(getUrls)
}

module.exports = GetUrls
