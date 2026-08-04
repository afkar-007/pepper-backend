const Wishlist = require ('../models/wishlistSchema')

const wishlistPost = async (req,res)=>{

try{

    const userId=req.user.id
    const {productId}=req.body

    const wishlist= await Wishlist.findOne({userId,productId})
    if(wishlist){
         wishlist.quantity +=1;
         await wishlist.save()

        return res.status(200).json({
            message:"quantity updated",
            data:wishlist
         })
    }
    const newWishlist =await Wishlist.create({
        userId,
        productId,
        quantity:1
    })
    res.status(200).json({
        message:'Wishlist added',
        data:newWishlist
    })


}catch(err){
    res.status(500).json({
        message:err.message
    })
}


}


const getWishlist= async(req,res)=>{
    try{
         const userId=req.user.id
        const wishlist = await Wishlist.find({userId}).populate("productId")

        if(!wishlist){
            return await res.status(404).json({
                message:"Wishlist Not fetched"
            })
        }
        res.status(200).json({
            message:"Wishlist Fetched",
            data:wishlist
        })


    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }


}




const removeWishlist =async(req,res)=>{

    try{

        const userId=req.user.id
        const {productId}=req.body

        const item =await Wishlist.findOneAndDelete({userId,productId})

         if(!item){
           return res.status(404).json({
                message:"item not found"
            })
        }

        res.status(200).json({
            message:"wishlist deleted successfully"
        })




    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }




}
















module.exports={wishlistPost,getWishlist,removeWishlist}