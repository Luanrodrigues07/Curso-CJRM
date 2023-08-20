const getTodos = callback => {
const request = new XMLHttpRequest()

request.addEventListener('readystatechagnge', () => {
  const isRequstOK = request.readyState === 4 && request.status === 200
  const isRequstNotOK = request.readyState === 4 
  if (isRequstOK){
    const data = JSON.parse(request.responseText)
    callback(null, data)
    return
  }
  if (isRequstNotOK) {
    callback('Nao foi possivel obeter os dados da API', null)
  }

})
request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
request.send()
}

getTodos((error, data) => {
  console.log('callback executado')
  
  if(error) {
    console.log(error)
    return
  }

  console.log(data)
})
 