const mongoose =require('mongoose')





  const OrderSchema = new mongoose.Schema({
  orderItems:[{
      
    name:{type: String, require:true},
    image:{type: String , require:true},
    price:{type:Number , require:true},
    qty:{type:Number , require:true},
    product:{type: mongoose.Schema.Types.ObjectId,ref: "Product",required: true,}
  }],

  user: {type: mongoose.Schema.Types.ObjectId,ref: "User",required: true,}
  },
    {
      timestamps: true,
    }
  );

module.exports= Order=mongoose.model('order',OrderSchema)