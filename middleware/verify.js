const jwt = require("jsonwebtoken")

const verify =  (req,res,next) =>{

    try{
        const authHeader = req.headers.authorization
        
   if(!authHeader){
            res.status(400).json({
                message:"Token required"
            })
        }




        const token = authHeader.split(" ")[1];

        const check = jwt.verify(token,process.env.JWT_SECRET)
     

        req.user =check
         
        next()






    }
    catch(err){
        res.status(500).json({
            message:"Invalid Token"
        })

    }



}

module.exports = verify