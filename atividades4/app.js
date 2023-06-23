const randomnumbers = [59, 61, 73, 57, 35, 73, 21, 87, 43]
let sum = 0
const limit = 400

for(let i = 0; i < randomnumbers.length; i++){
    if(sum > limit){
        console.log(`Passou de 400, o resultado é ${sum}`)
        break
    }

    sum += randomnumbers[i]
}

console.log(sum)