const mongoose =require('mongoose')
const connectDB=async()=>{
    try {
    await mongoose.connect(process.env.mongoUrl)
    console.log('database connected...')
    } catch (error) {
        console.log('error',err)

    }
}
module.exports=connectDB