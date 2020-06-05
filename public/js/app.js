//on utilise l'api de fetch qui n'est accessible que des navigateurs
console.log('je suis dans le côté client')

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})

fetch('http://localhost:3000/weather?adress=Boston').then((response) => {
    response.json().then((data) => {
        if(data.error){
            console.log(data.error)
        }else{
            console.log(data)
        }
    })
})
