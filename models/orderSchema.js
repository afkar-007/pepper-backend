const mongoose = require ("mongoose")

const orderSchema =  new mongoose.Schema({
userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users",
    required:true,
},
productId:{
     type:mongoose.Schema.Types.ObjectId,
     ref:"products",
    required:true,
    
},
totalprice:{
    type:Number,
    required:true
},

quantity:{
    type:Number,
    default:1
},
orderStatus:{
    type:String,
    default:"pending"
}


},{
    timestamps:true
})

const Order = mongoose.model("orders",orderSchema)
module.exports=Order