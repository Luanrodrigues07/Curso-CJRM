const form = document.querySelector('.signup-form')
const fedback = document.querySelector('.feed-back')

const usernameTest = username => /^[a-zA-Z]{6,12}$/.test(username)

form.addEventListener('submit', event => {
    event.preventDefault()

    const validation = usernameTest(event.target.username.value)

    if (validation) {
        fedback.textContent = 'username valid :)'
        return
    }
        fedback.textContent = 'o user deve conter 6 a 8 characters'
})


form.addEventListener('keyup', event => {
    const validation = usernameTest(event.target.value)

    if (validation) {
    form.username.setAttribute('class', 'success')
        return
    }
    form.username.setAttribute('class', 'error')
})