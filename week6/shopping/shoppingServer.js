const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express()

const shoppingRouter = require('./shoppingRouter')

app.use(express.json())
app.use('/store', shoppingRouter)

app.listen('3000', () => {
    console.log('server has started')
})