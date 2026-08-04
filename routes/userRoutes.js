const express = require ("express")
const Router = express.Router()
const verify = require('../middleware/verify')

const {UserPost,userGet,UserGetProfile,putProfile}=require('../controller/users')


Router.post('/',UserPost)
Router.post('/Login',userGet)
Router.get('/Profile',verify,UserGetProfile)
Router.put('/editProfile',verify,putProfile)













module.exports=Router