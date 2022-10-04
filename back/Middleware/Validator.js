const {body, validationResult} = require('express-validator')

const registerRules =()=>[
    body('email','eamil should be email').isEmail(),
    body('name','name is required').notEmpty(),
    body('adress','adress is required').notEmpty(),
    body('phone','phone is required').notEmpty(),
    body('password','eamil should be email').isLength({
        min :5 ,
        max:20
})
]

const loginRules=()=>[
    body('email','eamil should be email').isEmail(),
    body('password','eamil should be email').isLength({
        min :5 ,
        max:20
})
]
const validator =(req,res,next)=>{
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).send({errors:errors.array()})
        return ; 
    }
    next()
}
module.exports ={validator,registerRules,loginRules}