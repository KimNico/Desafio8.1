const express = require("express");
const fs = require("fs")
const path= require("path");
const Prod = require("../controller/ProdcutoController");

let ProdController = new Prod("productos")

const router  = express.Router();

router.get('/', async(req,res,next)=>{
    res.render("formulario",{data: await ProdController.getProductos()})
});

router.get("/productos", async(req,res,next)=>{
    let data = await ProdController.getProductos();
    res.render("productos",{data})
});

router.post("/productos",async(req,res,next)=>{
    ProdController.addProduct(req.body)
    res.redirect("/");
})

router.put("/productos/:id",async(req,res,next)=>{
    res.json(await ProdController.getProductoById(req.body,req.params.id))
})

module.exports=router;