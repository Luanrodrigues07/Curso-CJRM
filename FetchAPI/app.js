// fetch('https://api.github.com/users/Luanrodrigues07')
// .then(responce => {
//     console.log('Response', responce)
//     return responce.json()
// }) // quando for aceitada
// .then(user => console.log(user))
// .catch(error => console.log(error)) // quando for rejeitada



const getuser = async () => {
    const responce = await fetch('https://api.github.com/users/Luanrodrigues07') 
    return await responce.json()
}

getuser()

const loguser = async () => {
    const users = await getuser()
    console.log(users)
}
console.log(1)
console.log(2)

loguser()

console.log(3)
console.log(4)
