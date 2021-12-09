const bodyParser = require("body-parser")
const express = require("express")
const nodemailer = require("nodemailer")
require("dotenv").config()

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

const contactAddress = "zeniagist@gmail.com"

const mailer = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSWORD,
  },
})

app.post("/api/form", function (req, res) {
  mailer.sendMail(
    {
      from: req.body.email,
      to: [contactAddress],
      html: req.body.message,
    },
    function (err, info) {
      if (err) return res.status(500).send(err)
      res.json({ success: true })
    }
  )
})

app.listen(3000, () => {
  console.log("server running at port 3000")
})
