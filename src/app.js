const express = require('express')

const app = express()

// app.com
// app.com/help
// app.com/about

//on décrie ce qu'on veut faire avec la fonction quand la personne visite cet url
app.get('', (req , res) => {
    res.send('Hello express')
})

app.get('/help', (req, res) => {
    res.send('Hello help')
})

app.get('/about', (req, res) => {
    res.send('Hello about')
})

app.get('/weather', (req, res) => {
    res.send('Hello Weather')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})