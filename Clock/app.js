const clockContainer = document.querySelector(".clock-container")

const updateClock = () => {
    const present = new Date()
    const hours = present.getHours()
    const minues = present.getMinutes()
    const seconds = present.getSeconds()

const ClockHTML = `
<span>${String(hours).length === 1  ? `0${hours}` : hours }</span> :
<span>${String(minues).length === 1 ? `0${minues}` : minues }</span> :
<span>${String(seconds).length === 1 ? `0${seconds}` : seconds }</span> 
`

clockContainer.innerHTML = ClockHTML
}

setInterval(updateClock, 1000)

