const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const weather = require('./utils/WeatherFromCoordinate')
const forecast = require('./utils/forecast')
const port = process.env.port || 3000



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
    if(!req.query.adress) {
        return res.send({
            error: 'you need to provide an adress'
        })
    }

    geocode(req.query.adress, (error, success) => {
        // marche aussi en métant :
        // geocode(city, (error, {latitude, longitude} = {}) => {
            
            if(error){
                return res.send({
                            error,
                            errorCode: 400
                        })
            }
            const {latitude, longitude} = success
            forecast(latitude, longitude, (error, success) => {
                if(error){
                    return res.send({
                        error,
                        errorCode: 400
                    })
                }
                const forecastSuccess = success
                weather(latitude, longitude, (error, success) => {
                    if(error){
                        return console.log('Error: ' + error )
                    }
                    return res.send({
                        adress : req.query.adress,
                        location: forecastSuccess,
                        success
                    })
                })
            })
        
        })
})

//requete puis response
app.get('/product', (req, res) => {
    if(!req.query.search) {
        return res.send({
            error: 'you need to provide a new search'
        })
    }

    console.log(req.query.search)
    res.send({
        products: []
    })

})

app.get('/help/*', (req, res) => {
    res.render('404',{
        errorMessage: 'Article Not found'
    })
})

//page par défaut si on ne match pas d'URL
app.get('*', (req, res) => {
    res.render('404',{
        errorMessage: 'page 404'
    })
})

app.listen(port, () => {
    console.log('Server is up on port: ' + port)
})