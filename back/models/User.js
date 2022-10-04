const mongoose =require('mongoose')
const {Schema}=mongoose


const userSchema = new Schema({
    name:{type: String, require:true},
    email:{type: String , require:true},
    password:{type: String, require:true},
    adress:{type: String, require:true},
    phone:{type: Number, require:true},
    isAdmin:{type:Boolean, require:true, default:false}
})

module.exports= User=mongoose.model('user',userSchema)