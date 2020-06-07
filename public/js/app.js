//on utilise l'api de fetch qui n'est accessible que des navigateurs
console.log('je suis dans le côté client')

fetch('/weather?adress=Boston').then((response) => {
    response.json().then((data) => {
        if(data.error){
            console.log(data.error)
        }else{
            console.log(data)
        }
    })
})

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

console.log(weatherForm)
weatherForm.addEventListener('submit', (e) => {
    const location = search.value
    e.preventDefault()
    if(location != ''){
        messageOne.textContent = 'loading...'
        messageTwo.textContent = ''
        fetch('/weather?adress=' + location).then((response) => {
            response.json().then((data) => {
            if(data.error){
                messageOne.textContent = data.error
                messageTwo.textContent = ''
                console.log(data.error)
            }else{
                messageOne.textContent = data.location.location
                messageTwo.textContent = data.success
                console.log(data)
            }
    })
})
    }
})
