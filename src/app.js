const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public/')

// on utilise express.static pour rendre des fichiers static (CSS, JS, HTML...)
app.use('/',express.static(publicDirectoryPath))

//on set l'engine view
app.set('view engine', 'hbs')
//on set le chemin où l'on va chercher les vues
const viewsPath = path.join(__dirname, '../templates')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//on effectue le rendu avec système de templating
app.get('/', (req, res) => {
    res.render('index', {
        title : 'Weather app',
        name: 'pomme2',
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title : 'about app',
        name: 'pomme3',
        about : 'c\'est une pomme'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title : 'help app',
        name: 'pomme1',
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