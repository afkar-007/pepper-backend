const mongoose = require ("mongoose")

const WishlistSchema = new mongoose.Schema({

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
    required:true,
    default:1
}



})

const Wishlist = mongoose.model("wishlist",WishlistSchema)
module.exports=Wishlist