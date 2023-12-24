export class SecretFriend {
  participants = [
    { name: 'Guilherme Lopes', email: 'guilhermelopes035@gmail.com' },
    { name: 'Fernanda Verardi', email: 'verardifernanda@hotmail.com' },
    { name: 'Nicolas Locatti', email: 'nicolasmarrara@hotmail.com' },
    { name: 'Beatriz Santinon', email: 'beatrizsantinon@gmail.com' },
    { name: 'João Jordão', email: 'joaovinijordao@hotmail.com' },
    { name: 'Julia Kamla', email: 'juliakamla23@gmail.com' }
  ]

  constructor() {}

  getParticipants() {
    return this.participants
  }

  shuffleParticipants(participants) {
    const shuffledParticipants = this.shuffle(participants)
    const results = []
    for (let i = 0; i < shuffledParticipants.length; i++) {
      const current = shuffledParticipants[i]
      const next = shuffledParticipants[(i + 1) % shuffledParticipants.length]
      results.push({ giver: current, receiver: next })
    }
    return results
  }

  shuffle(array) {
    const shuffledArray = [...array]

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1))

      ;[shuffledArray[i], shuffledArray[randomIndex]] = [
        shuffledArray[randomIndex],
        shuffledArray[i]
      ]
    }

    return shuffledArray
  }
}
