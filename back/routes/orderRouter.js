const express=require('express')
const router=express.Router()
const Order = require('../models/Order')
const isAuth = require('../Middleware/isAuth')

//test routing
router.get('/test',(req,res)=>{
    res.send("test Roting")
})


//---create order---

router.post('/create', async(req,res) =>{
try {
    //check if there is items in the order
    if(req.body.orderItems.length === 0){
        res.status(400).send({msg: "No order items, cart is empty"})
    }
        //create & save  order

    const newOrder = new Order({
        orderItems: req.body.orderItems.map((x) => ({ ...x, product: x._id })),
        user: req.body.user,
        })

    const response = await newOrder.save()
    res.status(200).send({response: response, msg: "Order saved"})

} catch (error) {
    res.status(500).send({msg:'creating order ... server error...'});

}
})












//Get all orders 

router.get('/', async(req,res) =>{
    try {
        const result = await Order.find()
        res.status(200).send({result:result,msg:"getting orders successfully"})
    } catch (error) {
        res.status(200).send({msg:"cannot get orders"})
    
    }
    
    })



module.exports=router