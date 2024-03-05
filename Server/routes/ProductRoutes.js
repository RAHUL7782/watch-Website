const ProductController=require("../Controller/ProductController")
const  userControllers =require("../Controller/userControllers")

const express=require("express")
const router=express.Router();

router.get("/",ProductController.stuSave);

router.post("/addproduct",ProductController.stuSave)

router.get("/productDisplay",ProductController.productDisplay )




router.post("/registration",userControllers.userSave)
router.post("/Login",userControllers.userlogin)

module.exports=router;