const Url = require('../../models/Url')

async function EditUrl(id, name, link) {
  await Url.update(
    {
      name,
      link
    },
    { where: { id } }
  )

  return { name, link }
}

module.exports = EditUrl
