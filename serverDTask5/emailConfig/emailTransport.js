const nodemailer = require('nodemailer')
require('dotenv').config()

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: process.env.PORT,
    secure: false, 
    auth: {
      user: process.env.OWNER, 
      pass: process.env.PASSWORD, //get password from signing app in the security section of gmail 
    },
})

module.exports = {transporter}