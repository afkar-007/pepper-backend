const express= require("express")
const productRouter = express.Router()
const uploads = require("../middleware/multer")

const verify = require('../middleware/verify')

const {productPost,getProducts,getOneProduct}= require("../controller/product")
const {PostCart,GetCart,increaseQuantity,decreaseQuantity,remove}=require("../controller/Cart")
const {postOrders,getOrders}=require('../controller/order')

const {wishlistPost,getWishlist,removeWishlist}=require('../controller/Wishlist')


productRouter.post('/product',uploads.single("image"),productPost)
productRouter.get('/getProducts',verify,getProducts)
productRouter.get('/getoneProduct/:id',verify,getOneProduct)

productRouter.post('/postcart',verify,PostCart)
productRouter.get('/getcart',verify,GetCart)
productRouter.put('/increase',verify,increaseQuantity)
productRouter.put('/decrease',verify,decreaseQuantity)
productRouter.delete('/remove',verify,remove)


productRouter.post('/orderpost',verify,postOrders)
productRouter.get('/getOrder',verify,getOrders)

productRouter.post('/postWishlist',verify,wishlistPost)
productRouter.get('/getwishlist',verify,getWishlist)
productRouter.delete('/removeWishlist',verify,removeWishlist)




module.exports=productRouter