import { EmailService } from './EmailService.js'
import { SecretFriend } from './SecretFriend.js'

const secretFriend = new SecretFriend()
const emailService = new EmailService()

const main = () => {
  try {
    const participants = secretFriend.getParticipants()
    console.log('• participants: ', participants)

    const assignments = secretFriend.shuffleParticipants(participants)

    emailService.sendEmail(assignments)
  } catch (e) {
    console.error(e)
  }
}

main()
