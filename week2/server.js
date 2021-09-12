const express = require('express');
const app = express()

const users = [
    {name: 'Justin',location: 'Las Vegas'},
    {name: 'Tony',location: 'Las Vegas'},
    {name: 'Erik',location: 'Sacramento'},
    {name: 'Brian',location: 'Phoenix'}
]
const movies = [
    {Movie: 'Grudge', Rating:'10'},
    {Movie: 'Rapunzel', Rating:'10'},
    {Movie: 'Nobody', Rating:'6'},
    {Movie: 'Endgame', Rating:'8'}
]
const food = [
    {food: 'Sushi', Rating:'10'},
    {food: 'Borrito', Rating:'10'},
    {food: 'Burger', Rating:'10'},
    {food: 'Corn', Rating:'-10'},
]

app.get('/userData',(req,res)=>{
    res.send(users)
})
app.get('/movies', (req,res)=>{
    res.send(movies)
})
app.get('/food', (req,res)=>{
    res.send(food)
})



app.listen('3000', () => {
    console.log('server has started')
})