const User = require('../../Models/user')
const nodemailer = require('nodemailer')
const { secret_email_token } = require('../../Config/auth')
const { sign } = require('jsonwebtoken')

async function ForgotPassword(email) {
  const getUsers = await User.findOne({ where: { email } })

  if (getUsers) {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD
      }
    })

    const token = sign({}, secret_email_token, {
      subject: getUsers.id,
      expiresIn: '300s'
    })

    const mailOptions = {
      from: 'smurl.contact@gmail.com',
      to: email,
      subject: 'Smurl - Change your password',
      html: `<p>Hello user, did you forget your password?</p> <br/> <a href="http://localhost:3000/forgot-password/change?token=${token}" >Click here to change your password!</a> <br/> <p>If not you, please ignore this message.</p>`
    }

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) console.log(err)
      else console.log(info)
    })

    return { error: false, message: 'token sended' }
  }

  return { error: true, message: 'user not exists' }
}

module.exports = ForgotPassword
