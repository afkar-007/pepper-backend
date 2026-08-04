const mongoose = require("mongoose")

const prodductSceme=new mongoose.Schema({
    name:{type:String,required:true},
    image:{type:String,required:true},
    brand:{type:String,required:true},
    price:{type:String,required:true},
    discount:{type:String,required:true},
    stock:{type:String,required:true},
    rating:{type:String,required:true},
    reviews:{type:String,required:true},
    date:{type:String,required:true},
    category:{type:String,required:true},


//  ============phone==================
  ram:{type:String},
  storage:{type:String},
  processor:{type:String},
  battery:{type:String},
  camera:{type:String},
  display:{type:String},
  phoneDescription:{type:String},

//   ===========dress================

 size:{type:String},
 color:{type:String},
 material:{type:String},
 fit:{type:String},
 gender:{type:String},
 dressDescription:{type:String},
 
// ==============laptops==================
 lRam:{type:String},
 ssd:{type:String},
 lProcessor:{type:String},
 graphicsCard:{type:String},
 screenSize:{type:String},
laptopDescription:{type:String},



// ===============headPhones=============

driverSize:{type:String},
anc:{type:String},
batteryLife:{type:String},
bluetoothVersion:{type:String},
weight:{type:String},
headphoneDescription:{type:String},




// ============ watch=====================
wDisplay:{type:String},
wBattery:{type:String},
wBluetoothVersion:{type:String},
gps:{type:String},
waterResistance:{type:String},
wDescription:{type:String},

// ===========shoes========================
type:{type:String},
sGender:{type:String},
sColor:{type:String},
sSize:{type:String},
warrenty:{type:String},
shoeDescription:{type:String},













    
})

const Product = mongoose.model("products",prodductSceme)

module.exports=Product