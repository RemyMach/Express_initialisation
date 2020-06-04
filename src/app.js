const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public/')

// on utilise express.static pour rendre des fichiers static (CSS, JS, HTML...)
app.use('/',express.static(publicDirectoryPath))

//on set l'engine view
app.set('view engine', 'hbs')

//on set le chemin où l'on va chercher les vues
const viewsPath = path.join(__dirname, '../templates')
app.set('views', viewsPath)

//on effectue le rendu avec système de templating
app.get('/', (req, res) => {
    res.render('index', {
        title : 'Weather app'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        about : 'c\'est une pomme'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        aide : 'c\'est une aide'
    })
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