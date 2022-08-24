const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/DefineDBex'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const postsRouter = require('./routes/data')
app.use('/data',postsRouter)

app.listen(4000, () => {
    console.log('Server started')
})