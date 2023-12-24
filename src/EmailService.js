import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

export class EmailService {
  user = process.env.EMAIL
  password = process.env.PASS
  transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: this.user,
      pass: this.password
    }
  })

  constructor() {}

  sendEmail(assignments) {
    assignments.forEach((assignment) => {
      const givenFirstName = assignment.giver.name.split(' ')[0]
      const mailOptions = {
        from: this.user,
        to: assignment.giver.email,
        subject:
          'Resultado do Amigo Secreto da Rapaziada boa e o jao gol chumbo',
        text: `Salve ${givenFirstName}!!!\n\nVocê tirou: ${assignment.receiver.name}\n\nSerá dia 12/01/2024\n\nAté R$40,00\n\nVai toma no cu!\n`
      }

      this.transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('Erro ao enviar e-mail:', error)
        } else {
          console.log('E-mail enviado:', info.response)
        }
      })
    })
  }
}
