const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express()

const targetRouter = require('./todoRouter')

app.use(express.json())
app.use('/Todo', targetRouter)

app.listen('3000', () => {
    console.log('server has started')
})





