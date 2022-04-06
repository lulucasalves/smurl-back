const Url = require('../../Models/url')

async function EditUrl(id, name, link) {
  await Url.update(
    {
      name,
      link
    },
    { where: { id } }
  )

  return { error: false, message: 'Url edited' }
}

module.exports = EditUrl
