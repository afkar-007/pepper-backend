const Product = require("../models/product")

const productPost = async(req,res)=>{

    try{

        const item = await Product.create({
         ...req.body,
         image:req.file.filename
        })
        res.status(200).json({
            message:"Product Created Successfully",
            data:item
        })
      }  

     catch(err){
        res.status(500).json({
            message:err.message
        })
    }

}

const getProducts = async (req,res)=>{

    try{
        const {category,filter,search}=req.query

       let query={}

       if(category){
        query.category=category
       }




       if(search){
        query.name ={
            $regex:search,
            $options:"i"
        }
       }

       






       let sort={}

       if(filter==="low"){
        sort.price= 1
       }
       else if(filter==="high"){
        sort.price = -1
       }
       else if(filter==="highRating"){
         sort.rating = -1
       } 






        const item = await Product.find(query).sort(sort)

        res.status(200).json({
            message:"Product Fetched SuccessFUlly",
            data:item
            
        })




    }
    
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }

}



const getOneProduct=async(req,res)=>{

    try{
        const id = req.params.id

        const item = await Product.findById(id)

        res.status(200).json({
            message:"product fetched",
            data:item
        })

    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }


}





























module.exports={productPost,getProducts,getOneProduct}