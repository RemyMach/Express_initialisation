//on utilise l'api de fetch qui n'est accessible que des navigateurs
console.log('je suis dans le côté client')

fetch('http://localhost:3000/weather?adress=Boston').then((response) => {
    response.json().then((data) => {
        if(data.error){
            console.log(data.error)
        }else{
            console.log(data)
        }
    })
})

const weatherForm = document.querySelector('form')
console.log(weatherForm)
weatherForm.addEventListener('submit', (e) => {
    //permet de ne pas submit une page
    console.log(e)
    e.preventDefault()
    console.log('testing')
})
