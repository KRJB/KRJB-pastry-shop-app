const express=require('express')
const router=express.Router()

const User = require('../models/User')
const bcrypt=require('bcrypt')
const {validator,registerRules,loginRules} =require('../Middleware/Validator')
const jwt =require('jsonwebtoken')
const isAuth = require('../Middleware/isAuth')



//---register user---
router.post('/register',registerRules(),validator, async(req,res) =>{
    const{name,email,password,adress,phone}=req.body
try {

    // check for existance of user
let user = await User.findOne({email})
if (user) {
    return res.status(400).json({msg:'user already exist'})

}
    //create new user
user = new User({name,email,password,adress,phone})
const salt =10;
const hashedPassword= await bcrypt.hash(password, salt)
user.password=hashedPassword
    // save user
await user.save()

    //sign user
const payload ={
    id: user._id
}
    //token
const token = await jwt.sign(payload,process.env.secretOrKey,{expiresIn:60*60})

res.status(200).send({msg:'user registred with success',user,token})

} catch (error) {
    res.status(500).send({msg:'register server error'});
    
}
});


//---login---
router.post('/login', loginRules(),validator, async(req,res) =>{
    const {email,password} = req.body
    
    try {
       
        //check for existing user
        let user = await User.findOne({email})
        if(!user){
            return res.status(400).json({msg:'user does not exist'})
        }
        // is Match

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).send({msg:'wrong password'})
            
        } 
        const payload ={
            id: user._id
        }
        //token
        const token = await jwt.sign(payload,process.env.secretOrKey,{expiresIn:60*60})

        res.send({msg:'user logged succefully',user,token})


    } catch (error) {
         res.status(500).send({msg:'login server error'})

    }
})

//private router
router.get('/user',isAuth, (req,res) =>{
    res.status(200).send({user:req.user})

})

// get all users
router.get('/users', async(req, res) => {
    try {
       const result = await  User.find()
        res.status(200).send({ msg: "Getting all users with success", result})
    } catch (error) {
        res.status(500).send({msg: "Can not getting users!"})
    }
}
)



//---get user by id---

router.get('/:id', async(req,res) =>{
    try {
        const result = await User.findById({_id:req.params.id})
        res.status(200).send({msg:"getting user by id successfully",result})
    } catch (error) {
        res.status(200).send({msg:"cannot get the user"})
    
    }
    
    })

module.exports=router