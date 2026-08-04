const Users = require("../models/usersSchema")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const UserPost = async (req,res)=>{


    try{
        const {name,email,password}= req.body
        const HashPass = await bcrypt.hash(password,10)

        const user = await Users.create({
             name,
             email,
            password:HashPass
        })
       
        res.status(200).json({
            message:"Registration sucessful",
            data:user
        })
         

    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
        
    }


}


const userGet= async (req,res)=>{

    try{
        const {email,password}=req.body
          
        const user = await Users.findOne({email})

        if(!user){
            return res.status(404).json({
                message:"invalid email or password"
            })
        }

        const check = await bcrypt.compare(password,user.password)
        if(!check){
            return res.status(404).json({
                message:"invalid email or password"
            })
        }

       const token = jwt.sign(
         {id:user.id,
            email:user.email,
            role:user.role
         },
         process.env.JWT_SECRET,
         {expiresIn:"10d"}


       )
       res.status(200).json({
        message:"user Matched",
        data:token,
        role:user.role
       })





    }
    catch(err){
        res.status(500).json({
            message:err.message
        })

    }




}


const UserGetProfile=async(req,res)=>{
    try{

        const userId=req.user.id
        const user = await Users.findById(userId)
        if(!user){
          return res.status(404).json({
            message:"user Not Found"
          })
        }

        res.status(200).json({
            message:"user Found",
            data:user
        })



    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }


}



const putProfile=async(req,res)=>{
    try{
        const {name,email}=req.body
       const userId=req.user.id
        const check = await Users.findByIdAndUpdate(userId,
            {
            name,
            email
        },{
            new:true
        }
        )
        if(!check){
            return res.status(404).json({
                message:"user Not found"
            })
        }
        res.status(200).json({
            message:"user updated",
            data:check
            

        })


    
    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }










}

























module.exports={UserPost,userGet,UserGetProfile,putProfile}