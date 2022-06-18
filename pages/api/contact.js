export default function (req, res) {
  require('dotenv').config()

  let nodemailer = require('nodemailer')

  const {name, email, tel, message} = req.body;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'giyotech@gmail.com',
      pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
    },
    secure: true,
  })

  // internon team
  const teamMailData = {
    from: 'giyotech@gmail.com',
    to: 'giyotech@gmail.com',
    subject: `${name} Size Bir Mesaj Gönderdi.`,
    html: `<h2>${message}</h2>
    <br />
    <h3>${ name }</h3>
    <h3>Telefon: ${ tel }</h3>
    <p>Gönderen: ${ email }</p>`
  }

  // potential customer
  const potentialCustomerMailData = {
    from: 'giyotech@gmail.com',
    to: email,
    subject: "Mesajınız Ekibimize Ulaştı",
    html: `<h1>Merhaba!</h1>
    <h2>GİYOTECH ile iletişime geçtiğiniz için teşekkür ederiz.</h2>
    <h2>Hizmet ve Fiyat Teklifi hakkında bilgi vermek için ekibimiz sizinle en kısa sürede iletişime geçecektir</h2>
    <a href="www.giyotech.com" target="blank">www.giyotech.com</a>
    `
  }

  // internon team
  transporter.sendMail(teamMailData, function (err, info) {
    if (err)
      console.log(err)
    else
      console.log(info)
  })

  // potential customer
  transporter.sendMail(potentialCustomerMailData, function (err, info) {
    if (err)
      console.log(err)
    else
      console.log(info)
  })

  res.status(200)
}