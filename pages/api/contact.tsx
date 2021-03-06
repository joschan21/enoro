import type { NextApiRequest, NextApiResponse } from 'next'
import ReactDOMServer from 'react-dom/server'
import nodemailer from 'nodemailer'

interface formattedAnswer {
  question: string
  answer: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, phone, message } = req.body
  const formattedAnswers: formattedAnswer[] = req.body.formattedAnswers

  const htmlAsJsx = (
    <>
      <h2>Es gibt eine neue Anfrage über deine Website!</h2>
      <p>Von: {name}</p>
      <p>E-Mail: {email}</p>
      {phone && <p>Telefon: {phone}</p>}
      {message && <p>{message}</p>}
      <ul>
        {formattedAnswers.map((answer, index) => (
          <li key={index}>
            <span>
              {answer.question}
              <b> {answer.answer}</b>
            </span>
          </li>
        ))}
      </ul>
      <br />
      <small>MfG Joscha :^)</small>
    </>
  )
  const output = ReactDOMServer.renderToStaticMarkup(htmlAsJsx)

  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  })

  const mailOptions = {
    from: process.env.FROM,
    to: ['booking@eliasnoro.de', 'sahabielias1@gmail.com'],
    subject: `Neue Auftritt-Anfrage von ${name}!`,
    html: output,
  }

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error)
      return res.status(500).end()
    }
    res.status(200).end()
  })
}
