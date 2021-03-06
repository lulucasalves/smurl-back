const Url = require('../../Models/url')
const User = require('../../Models/user')
const { v4: uuid } = require('uuid')

async function CreateUrl(name, link, user_id) {
  const getUrls = await Url.findAll({ where: { user_id } })

  if (getUrls.length < 10) {
    try {
      await Url.create({ id: uuid(), user_id, name, link })
      await User.update(
        { number_urls: getUrls.length + 1 },
        { where: { id: user_id } }
      )

      return { error: false, message: 'Url created' }
    } catch (err) {
      return { error: true, message: 'The name of this route already exists' }
    }
  }

  return {
    error: true,
    message: 'You have reached the maximum number of routes'
  }
}

module.exports = CreateUrl
