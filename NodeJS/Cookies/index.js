const express = require("express")
const cookieParser = require("cookie-parser")
const app = express()

app.use(cookieParser("Thisismysecret"))

app.get("/greet",(req,res)=>{
    const {name} = req.cookies
    res.send(`Hello ${name}`)
})

app.get("/setName",(req,res)=>{
    res.cookie("name","buddy")
    res.send("Hey there, I send you a cookie")
})

app.get("/getsignedcookie",(req,res)=>{
    res.cookie('fruit','grape', {signed:true})
    res.send("Okay, signed your fruit cookie")
})

app.get("/verifyfruit",(req,res)=>{
    console.log(req.cookies)
    console.log(req.signedCookies)
    res.send(req.signedCookies)
})

app.listen(5000,()=>{
    console.log("Server running at port 5000")
})