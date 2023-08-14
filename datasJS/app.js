const past = new Date('May 1 2020 7:47:00')
const present = new Date()

const difentDate = present.getTime() - past.getTime()

console.log(difentDate)

const seconds = Math.round(difentDate / 1000)

console.log({seconds})

const minues = Math.round(seconds / 60)

console.log({minues})

const hours = Math.round(minues / 60)

console.log({hours})

const days = Math.round(hours / 24)

console.log({days})


const timeStamp = 103024507182

console.log(new Date(timeStamp))
