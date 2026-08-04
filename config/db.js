const dns =require("dns")
dns.setServers(["8.8.8.8", "8.8.4.4"])


const mongoose = require("mongoose")

async function ConnectDB(){

    try{
        console.log(process.env.MONGO_URL);
       await mongoose.connect(process.env.MONGO_URL)

        console.log("DB is connected");
        

    }
    catch(err){
        console.log(err);
        
    }



}

module.exports = ConnectDB
