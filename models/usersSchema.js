const mongoose = require("mongoose")

const usersSchema = new mongoose.Schema({

name:{
    type:String,
    required:true
},

email:{
    type:String,
    required:true
},

password:{
    type:String,
    required:true
},

role:{
    type:String,
    enum:["user","admin"],
    default:"user"

}  }
  , 

 {
    timestamps:true
   }

)

const Users = mongoose.model("users",usersSchema)
module.exports=Users