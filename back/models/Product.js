const mongoose =require('mongoose')
const {Schema}=mongoose


const productSchema = new Schema({
    name:{type: String, require:true},
    image:{type: String , require:true},
    price:{type:Number , require:true}
   
})

module.exports= Product=mongoose.model('product',productSchema)