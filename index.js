const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")
const app = express()
const port = 1000
const mongoose = require("mongoose")
const Products = require("./products")

mongoose.connect("mongodb://localhost:27017/mydb" ,{
    family:4
}).then(()=>{
    console.log("mongoose connected...")
}).catch(()=>{
    console.log("mongodb not connected...")
})


app.use(express.static(__dirname + "/public" ))
app.use(bodyparser.urlencoded({extended:false}))

app.use(cors())
app.set("view engine" , "ejs")



app.post("/product" ,async(req,res)=>{
    const myproduct = new Products()
    myproduct.myname = req.body.name
    const updateddata = await myproduct.save()
    console.log(updateddata)
})

app.get("/home" ,(req,res)=>{
    res.send("this is home page....")
})

app.get("/homepage",(req,res)=>{
    res.render("home.ejs")
})

app.get("/aboutpage" ,(req,res)=>{
    res.render("about.ejs")
})

app.post("/formdata",(req,res)=>{
    res.send(req.body.name)
    res.json(req.body)
})




app.listen(port ,()=>{
    console.log("server started.....")
})