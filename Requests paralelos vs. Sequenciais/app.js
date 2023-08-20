// const getPokemon = async => {
//     const bulbasour = fetch('')
//     const charmander = fetch('')
//     const squirtle = fetch('')

//     console.log(bulbasour.json())
//     console.log(charmander.json())
//     console.log(squirtle.json())
// }

// getPokemon()

const getPokemon = async => {
    const bulbasour = fetch('')
    const charmander = fetch('')
    const squirtle = fetch('')

    const results = await Promise.all([bulbasour,charmander,squirtle])
    results.forEach(async responce => console.log(await responce.json()))

}

getPokemon()