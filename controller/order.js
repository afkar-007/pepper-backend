const Order=require('../models/orderSchema')
const Cart= require('../models/cartSchema')

const postOrders= async(req,res)=>{

try{
    const userId=req.user.id
    const cartItems= await Cart.find({userId}).populate("productId")


    if(cartItems.length===0){
        return res.status(404).json({
            message:"Cart is Empty"
        })
    }
    const orders=[]


    for(const item of cartItems){

        const items = await Order.create({
            userId,
            productId:item.productId._id,
            quantity:item.quantity,
            totalprice:item.productId.price*item.quantity
         })
           orders.push(items)
    }

    res.status(200).json({
        message:"order created successfully",
        data:orders
    })
 
    await Cart.deleteMany({userId})




}catch(err){
    res.status(500).json({
        message:err.message
    })
}




}

const getOrders= async (req,res)=>{

    try{
        const userId=req.user.id
    const orders = await Order.find({userId}).populate("productId")

    res.status(200).json({
        message:"orders fetched",
        data:orders
    })


    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }







}
















module.exports={postOrders,getOrders}