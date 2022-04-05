const User = require('../../models/User')
const DeleteUrl = require('../Urls/deleteUrl')
const GetUrls = require('../Urls/getUrls')

async function DeleteUser(id) {
  const getUrls = JSON.parse(await GetUrls(id))

  getUrls.map(async ({ id }) => {
    await DeleteUrl(id)
  })

  await User.destroy({ where: { id } })

  return { id }
}

module.exports = DeleteUser
