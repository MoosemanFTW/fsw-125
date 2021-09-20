const express = require('express');
const targetRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

const target = [
    {name: 'Obi-Wan',lastName: 'Kenobi', living: true, bounty: '$1000', type: 'Jedi', id: uuidv4()},
    {name: 'Darth',lastName: 'Maul', living: true, bounty: '$500', type: 'Sith', id: uuidv4()},
    {name: 'Leia',lastName: 'Skywalker Organa Solo', living: true, bounty: '$5000', type: 'Jedi', id: uuidv4()},
    {name: 'Han',lastName: 'Solo', living: false, bounty: '$10000', type: 'Jedi', id: uuidv4()}
]

targetRouter.get('/',(req,res)=>{
    res.send(target)
})
targetRouter.post('/',(req,res)=>{
    const newTarget = req.body;
    newTarget._id = uuidv4();
    target.push(newTarget);
    console.log(target)
    res.send(`added ${newTarget.name}`)
})

module.exports = targetRouter;