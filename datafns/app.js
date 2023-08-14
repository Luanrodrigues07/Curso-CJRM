const present = new Date()

console.log(dateFns.format(present, 'DD/MM/YYYY'))

const past = new Date('may 2 2023 17:00:00')

console.log(dateFns.distanceInWords(present,past, { addSuffix: true}))