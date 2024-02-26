const mongoose = require('mongoose');

const productImages  = new mongoose.Schema({
    ProductName:String,
    ProductTitle:String,
    productPrice:Number,
    productImage:String
})

module.exports = mongoose.model("Product" , productImages)