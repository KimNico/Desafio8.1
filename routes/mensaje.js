const express = require("express");
const fs = require("fs")
const path= require("path");
const Chat = require("../controller/ChatController");

let ChatController = new Chat("productos")

const router  = express.Router();

router.get('/', async(req,res,next)=>{
    res.render("formulario",{data: await ChatController.getMessages()})
});


router.post("/",async(req,res,next)=>{
    ChatController.addChatMsg(req.body)
    res.redirect("/");
})


module.exports=router