const mongoose = require("mongoose")

const CartSchema = new mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products",
        required:true
    },
    quantity:{
        type:Number,
        default:1
    }
     
})

const Cart = mongoose.model("cart",CartSchema)
module.exports=Cart