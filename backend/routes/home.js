const router = require("express").Router();

const Product = require("../models/product");




router.get("/",async (req,res)=>{
    try{
       const product = await Product.find();
       
       console.log(product)
       res.setHeader('Content-Type','image/jpg'); 
    //    res.send(product[0].image.data);
    res.send(product);
    }
    catch(err)
    {
        console.log(err);
    }
   })

   
module.exports = router;