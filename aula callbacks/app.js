const myfunc = (callback) => {
    const value = 77

    callback(value)
}

myfunc ((number)=> {
    console.log(number)

})

// forech => para cada


const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']

const logArrayInfo = (socialNetwork, index, array) => {
    console.log(index, socialNetwork, array)
}

socialNetworks.forEach()