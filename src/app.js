const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public/HTML')

// on utilise express.static pour rendre des fichiers static (CSS, JS, HTML...)
app.use('/',express.static(publicDirectoryPath))
// on peut avoir accès à about.html et help.html en tapant le nom complet du coup

// app.com
// app.com/help
// app.com/about

// app.get('/', (req, res) => {
//     res.send('<h1>Hello Home</h1>')
// })

// app.get('/help', (req, res) => {
//     res.send({
//         name: 'tom',
//         age: 24
//     })
// })

// app.get('/about', (req, res) => {
//     res.send('<h1>Hello about</h1>')
// })

app.get('/weather', (req, res) => {
    res.send({
        degrees : 28,
        location: 'Paris'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})