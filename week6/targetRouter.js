const express = require('express');
const targetRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

const target = [
    {name: 'Obi-Wan',lastName: 'Kenobi', living: true, bounty: '$1000', type: 'Jedi', _id: uuidv4()},
    {name: 'Darth',lastName: 'Maul', living: true, bounty: '$500', type: 'Sith', _id: uuidv4()},
    {name: 'Leia',lastName: 'Skywalker Organa Solo', living: true, bounty: '$5000', type: 'Jedi', _id: uuidv4()},
    {name: 'Han',lastName: 'Solo', living: false, bounty: '$10000', type: 'Jedi', _id: uuidv4()}
]

targetRouter.get('/',(req,res)=>{
    res.send(JSON.stringify(target,null,10))
})

targetRouter.get('/:targetId', (req,res) =>{
    const targetId = req.params.targetId
    const onetarget = target.find(item => item._id === targetId);
    
    res.send(onetarget)
})

targetRouter.post('/',(req,res)=>{
    const newTarget = req.body;
    newTarget._id = uuidv4();
    target.push(newTarget);
    console.log(target)
    res.send(`added ${newTarget.name}`)
})

targetRouter.delete('/:targetId', (req,res) =>{
    const targetId = req.params.targetId;
    const targetIndex = target.findIndex(item => item._id === targetId);
    target.splice(targetIndex, 1);

    res.send('item deleted')
})

targetRouter.put('/:targetId', (req,res) =>{
    const targetId = req.params.targetId;
    const targetIndex = target.findIndex(item => item._id === targetId);
    const updatecItem = Object.assign(target[targetIndex], req.body);

    res.send('resource updated')
})

module.exports = targetRouter;