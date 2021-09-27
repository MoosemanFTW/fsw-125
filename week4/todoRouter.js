const express = require('express');
const listRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

const list = [
    {name: 'Homework', description: 'Do Homework', completed: false, _id: uuidv4()},
    {name: 'Shower', description: 'Take a shower', completed: false, _id: uuidv4()},
    {name: 'Feed Cat', description: 'Feed the cat', completed: false, _id: uuidv4()},
    {name: 'Gym', description: 'Go to the gym', completed: false, _id: uuidv4()}
]

listRouter.get('/',(req,res)=>{
    
    res.send(list)
})
listRouter.get('/:itemId', (req,res) =>{
    const itemId = req.params.itemId
    const oneitem = list.find(item => item._id === itemId);
    
    res.send(oneitem)
})
listRouter.post('/',(req,res)=>{
    const newItem = req.body;
    newItem.id = uuidv4();
    list.push(newItem);
    console.log(list)
    res.send(`added ${newItem.name}`)
})

listRouter.delete('/:itemId', (req,res) =>{
    const itemId = req.params.itemId;
    const itemIndex = list.findIndex(item => item._id === itemId);
    list.splice(itemIndex, 1);

    res.send('item deleted')
})

listRouter.put('/:itemId', (req,res) =>{
    const itemId = req.params.itemId;
    const itemIndex = list.findIndex(item => item._id === itemId);
    const updatecItem = Object.assign(list[itemIndex], req.body);

    res.send('resource updated')
})

module.exports = listRouter;