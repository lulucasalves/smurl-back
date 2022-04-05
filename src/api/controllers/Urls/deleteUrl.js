const Url = require('../../models/Url')

async function DeleteUrl(id) {
  await Url.destroy({ where: { id } })
}

module.exports = DeleteUrl
