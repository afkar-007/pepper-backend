require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
const ConnectDB = require('./config/db')
const Router = require('./routes/userRoutes')
const productRouter = require('./routes/ProductRoutes')
const PORT= process.env.PORT ||3030

ConnectDB()

app.use(express.json())
app.use(cors())

app.use(express.urlencoded({extended:true}))

app.use('/pepper',Router)
app.use('/pepper/products',productRouter)


app.get('/',(req,res)=>{
    res.send("Pepper Backend is running")
})












app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    
})