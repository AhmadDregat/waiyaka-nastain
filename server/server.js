// Server setup
const express = require('express')
const app = express()
const api = require('./server/routes/api')
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

// Mongoose setup
const connectionKey = 'mongodb+srv://waiyakanastain:Aa1234@waiyakanastain.uvwc6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const mongoose = require('mongoose')
mongoose.connect(connectionKey, { useNewUrlParser: true })

app.use('/', api)

const port = 3000
app.listen(port, function() {
    console.log(`Running on port ${port}`)
})