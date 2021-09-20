const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express()

const targetRouter = require('./targetRouter')

app.use(express.json())
app.use('/targets', targetRouter)

app.listen('3000', () => {
    console.log('server has started')
})





