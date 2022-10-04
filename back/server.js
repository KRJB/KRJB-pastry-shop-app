const express= require('express')
const connectDB = require('./config/connectDB')
require('dotenv').config({path:'./config/.env'})
const app = express()
connectDB()

const PORT= process.env.PORT||5000;

app.use(express.json())
app.listen(5000,err=>{
    err? console.log('error,err')
    :console.log(`server is running in port ${PORT}...` )
})


app.use('/api/user',require('./routes/userRouter'))
app.use('/api/product',require('./routes/productRouter'))
app.use('/api/order',require('./routes/orderRouter'))
