const Url = require('../../models/Url')

async function DeleteUrl(id) {
  await Url.delete({ where: id })
}

module.exports = DeleteUrl
