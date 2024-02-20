const express = require("express")
const fs = require("fs")
const app = express()
const port = 2000

app.set("view engine" , 'ejs')
app.use(express.static(__dirname + "/public"))

app.get("/" ,(req,res)=>{
res.render("service.ejs")
})

const firstperformance =  performance.now()
console.log(firstperformance)
const textfile = fs.readFileSync("./dummy.txt" , 'utf-8')
console.log(textfile)
 
const secondperformance = performance.now()
console.log(secondperformance)

app.get("/text" ,(req,res) => {
    res.send({"textfile" : textfile})
})
app.listen(port ,()=>{
    console.log(`your port started on ${port}`)
})