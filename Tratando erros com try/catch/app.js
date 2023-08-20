const form =  document.querySelector('#form')

form.addEventListener('submit', async event => {
    event.preventDefault()

    const inputValue = event.target.search.inputValue
    const ApiKey = 'sushwhsiwuhs'
    const url =  `https://apisite.com/v1/gifts/search?apikey=${apiKey}&limit=1&8=${inputValue}`
    
    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error('nao foi possivel obter os dados')
        }
        const giftdate = await response.json()
        console.log(giftdate)
    } catch (error) {
        alert(`erro: ${error.message}`)
    }
})