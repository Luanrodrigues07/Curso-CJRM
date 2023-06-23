const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')
// const close = document.querySelector('.poup-close')

button.addEventListener('click', () => {
    popup.style.display = 'block'
    console.log('clickou')
})

// close.addEventListener('click', () =>{
//     popup.style.display = 'none'
//     console.log('clickou')
// })

popup.addEventListener('click', event => {
    const clasname = event.target.classList[0]
    const check = ['poup-close', 'popup-link', 'popup-wrapper']
    const chesum = check.some(check => check === clasname)

    if(chesum) {
        popup.style.display = 'none'

    }
})