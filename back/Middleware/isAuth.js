const jwt =require('jsonwebtoken')
const User =require('../models/User')
require('dotenv').config({path:'./config/.env'})

const isAuth =async(req,res,next)=>{
 try {
    const token =req.headers['x-auth-token2']
    //check for token
    if (!token) { 
       return res.status(400).send({msg:'no token unauthorized'})

    }
    const decode = await jwt.verify(token,process.env.secretOrKey)

    //get user by id from payload
    const user = await User.findById(decode.id)
   //check User
    if(!user){
      return res.status(400).send({msg:"unauthorized"})
  }
    //get user 
req.user = user
next()
 } catch (error) {
    return res.status(400).send({msg:'token is not valid'})

 }
}


module.exports = isAuth