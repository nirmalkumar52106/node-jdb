const mongoose = require("mongoose")


const myproduct = new mongoose.Schema({
    myname:String
})

const Products = mongoose.model("myprodcuts" , myproduct)

module.exports = Products