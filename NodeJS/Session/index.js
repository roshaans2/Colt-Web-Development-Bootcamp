const express = require("express")
const app = express()
const session = require("express-session")

const sessionOptions = {secret:'thisisasecret',resave:false,saveUninitialized:false}

app.use(session(sessionOptions))

app.get("/viewcount",(req,res)=>{
    if(req.session.count){
        req.session.count += 1
    }
    else{
        req.session.count = 1
    }
    res.send(`You have viewed this page ${req.session.count} times`)
})

app.get("/register",(req,res)=>{
    const {username} = req.query
    req.session.username = username
    res.redirect("/greet")
})

app.get("/greet",(req,res)=>{
    res.send(`Hello ${req.session.username}`)
})

app.listen(5000,()=>{
    console.log("Server running at port 5000")
})