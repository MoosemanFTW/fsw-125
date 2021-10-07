const express = require('express');
const shoppingRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

const storeItem = [
    {name: 'bannana',type: 'food', price: '200', _id: uuidv4()},
    {name: 'pants',type: 'clothing', price: '2500', _id: uuidv4()},
    {name: 'basket ball',type: 'toy', price: '1000', _id: uuidv4()},
    {name: 'robot',type: 'toy', price: '1500', _id: uuidv4()},
    {name: 'shirt',type: 'clothing', price: '800', _id: uuidv4()},
    {name: 'soup',type: 'food', price: '300', _id: uuidv4()},
    {name: 'flour',type: 'food', price: '100', _id: uuidv4()}
    
]

shoppingRouter.get('/',(req,res)=>{
    res.send(JSON.stringify(storeItem,null,10))
})

shoppingRouter.get('/search/type', (req,res) =>{
    const itemType = req.query.type;
    const fillteredItems = storeItem.filter(item => item.type === itemType);
    
    res.send(fillteredItems)
})



module.exports = shoppingRouter;