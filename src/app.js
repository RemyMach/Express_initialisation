const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public/')

// on utilise express.static pour rendre des fichiers static (CSS, JS, HTML...)
app.use('/',express.static(publicDirectoryPath))
// on peut avoir accès à about.html et help.html en tapant le nom complet du coup

app.get('/weather', (req, res) => {
    res.send({
        degrees : 28,
        location: 'Paris'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})