const Url = require('../../Models/url')

async function EditUrl(id, name, link) {
  try {
    await Url.update(
      {
        name,
        link
      },
      { where: { id } }
    )

    return { error: false, message: 'Url edited' }
  } catch {
    return { error: true, message: 'The name of this route already exists' }
  }
}

module.exports = EditUrl
