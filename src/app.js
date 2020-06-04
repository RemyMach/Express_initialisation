const express = require('express')

const app = express()

// app.com
// app.com/help
// app.com/about

//on décrie ce qu'on veut faire avec la fonction quand la personne visite cet url
app.get('', (req , res) => {
    res.send('<h1>Hello express</h1>')
})

app.get('/help', (req, res) => {
    res.send({
        name: 'tom',
        age: 24
    })
})

app.get('/about', (req, res) => {
    res.send('<h1>Hello about</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        degrees : 28,
        location: 'Paris'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})