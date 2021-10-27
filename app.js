const expressEjsLayouts = require('express-ejs-layouts')
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT || 5000

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(expressEjsLayouts)
app.use(cors())

app.use('/api', require('./routes'))

app.get('/', (req,res) => {
    res.render('home', {
        layout: 'layouts/main',
    })
})

app.listen(PORT, () => console.log(`Server runing on http://localhost:${PORT}`))