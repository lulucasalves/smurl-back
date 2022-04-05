const User = require('../../models/User')

async function EditUser(id, user, email, phone) {
  await User.update(
    {
      user,
      email,
      phone
    },
    { where: { id } }
  )

  return { user, email, phone }
}

module.exports = EditUser
