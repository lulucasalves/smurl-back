const Url = require('../../Models/url')

async function GetUrl(name) {
  const getUrls = await Url.findOne({ where: { name: `smurl.ml/l/${name}` } })
  return JSON.stringify(getUrls)
}

module.exports = GetUrl
