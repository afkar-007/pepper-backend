const Cart = require ("../models/cartSchema")

const PostCart = async (req,res)=>{
    try{

        const userId=req.user.id
        const {productId}=req.body

        const cartInc = await Cart.findOne({userId,productId})
        if(cartInc){
            cartInc.quantity +=1
            await cartInc.save()

            return res.status(200).json({
                message:"Cart Quantity updated",
                data:cartInc
            })
          
        }



              
       const newcart=await Cart.create({
            userId:userId,
            productId:productId,
            quantity:1

        })

        res.status(200).json({
            message:"cart added successfully",
            data:newcart
            

        })


    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }

}


const GetCart= async (req,res)=>{
    try{
        const userId=req.user.id
        const cart = await Cart.find({userId})
         .populate("productId")
    
         const total = cart.reduce((sum, item) => {
    const price = item.productId.price;
    return sum + price * item.quantity;
}, 0);



         res.status(200).json({
            message:"Cart fetched",
            data:cart,
            total
         })

    }
    catch(err){
        res.status(500).json({
            message:err.message
        })

    }
}


const increaseQuantity = async(req,res)=>{

    try{
        const userId=req.user.id
        const {productId}=req.body
        const addquantity = await Cart.findOne({userId,productId})

          if (!addquantity) {
            return res.status(404).json({
                message: "Cart item not found"
            });
        }

       
            addquantity.quantity +=1
            await addquantity.save()
        

       res.status(200).json({
        message:"quantity increased",
        data:addquantity
       })



    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }






}

const decreaseQuantity= async (req,res)=>{

    try{
  const userId=req.user.id
  const {productId}=req.body
  const decQuantity = await Cart.findOne({userId,productId})

  if(!decQuantity){
   return res.status(404).json({
        message:"Qunatity not updated"
    })
  }

  if(decQuantity.quantity>1){
    decQuantity.quantity -=1
  
  }

  await decQuantity.save()
    res.status(200).json({
        message:"quantity decresed",
        data:decQuantity
        
    })

    }catch(err){
        res.status(500).json({
            message:err.message
        })

    }







}

const remove = async (req,res) =>{
    try{
        const userId=req.user.id
        const {productId}=req.body
        const item = await Cart.findOneAndDelete({userId,productId})

        if(!item){
           return res.status(404).json({
                message:"item not found"
            })
        }
          
        res.status(200).json({
            message:"product Remove sucessfully"
        })



    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
    
}










module.exports= {PostCart,GetCart,increaseQuantity,decreaseQuantity,remove}