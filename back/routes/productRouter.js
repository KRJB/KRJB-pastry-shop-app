const express=require('express')
const router=express.Router()

const Product = require('../models/Product')

//test routing
router.get('/test',(req,res)=>{
    res.send("test Roting")
})


//---add product---

router.post('/name', async(req,res) =>{
    const{name,image,price}=req.body
try {
    //simple validation
if(!name || !image || !price){
    return res.status(400).json({msg:'please entre all fields'})
}
    // check for existance of product
let product = await Product.findOne({name})
if (product) {
    return res.status(400).json({msg:'product already exist'})

}
    //create & save  product
product = new Product({name,image,price})
await product.save()
res.status(200).send({msg:'product added with success',product})

}
catch (error){
    res.status(500).send({msg:'adding product ... server error...'});

}
})

//---get all products---

router.get('/', async(req,res) =>{
try {
    const result = await Product.find()
    res.status(200).send({result:result,msg:"getting contacts successfully"})
} catch (error) {
    res.status(200).send({msg:"cannot get contacts"})

}

})
//delete product
router.delete('/:id',  async(req, res) => {
    try {
        let product = await Product.findByIdAndDelete({_id: req.params.id})
        if(product){
            return res.status(200).send({msg: "Product deleted", response: product})
        }
        return res.status(400).send({msg: "This product is not exist"})
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg: "Can not delet this product!"})
    }
})



//---get product by id---

router.get('/:id', async(req,res) =>{
    try {
        const result = await Product.findById({_id:req.params.id})
        res.status(200).send({result:result,msg:"getting product by id successfully"})
    } catch (error) {
        res.status(200).send({msg:"cannot get the product"})
    
    }
    
    })

module.exports=router