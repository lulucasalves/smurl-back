const Url = require('../../Models/url')

async function DeleteUrl(id) {
  await Url.destroy({ where: { id } })

  return { error: false, message: 'Url deleted' }
}

module.exports = DeleteUrl
