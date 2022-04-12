const Url = require('../../Models/url')
const User = require('../../Models/user')

async function DeleteUrl(id, user_id) {
  const getUrls = await Url.findAll({ where: { user_id } })
  await User.update(
    { number_urls: getUrls.length - 1 },
    { where: { id: user_id } }
  )
  await Url.destroy({ where: { id } })

  return { error: false, message: 'Url deleted' }
}

module.exports = DeleteUrl
