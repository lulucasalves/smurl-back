const User = require('../../Models/user')
const DeleteUrl = require('../Urls/deleteUrl')
const GetUrls = require('../Urls/getUrls')

async function DeleteUser(id) {
  const getUrls = JSON.parse(await GetUrls(id))

  let urlMap = getUrls.map(async ({ id: urlId }) => {
    await DeleteUrl(urlId, id)

    return
  })

  Promise.all(urlMap).then(async () => {
    await User.destroy({ where: { id } })

    return { error: false, message: 'Account deleted' }
  })
}

module.exports = DeleteUser
