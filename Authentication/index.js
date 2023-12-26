const express = require("express")
const mongoose = require("mongoose")
const app = express()
const User = require("./models/user")
const bcrypt = require("bcrypt")
const session = require("express-session")


app.use(express.urlencoded({extended:true}))

require("dotenv").config()
mongoose.connect(process.env.MONGO_URI).then(()=>console.log("DB Connected")).catch((err)=>console.log(err))

app.set('view engine','ejs')
app.set('views','views')

app.use(express.urlencoded({extended:true}))
app.use(session({secret:process.env.secret}))

const requireLogin = (req,res,next) => {
    if(req.session.user_id){
        next()
    }
    else{
        res.redirect("/login")
    }
}

app.get("/",(req,res)=>{
    res.send("This is home page")
})

app.get("/register",(req,res)=>{
    res.render("register")
})

app.get("/login",(req,res)=>{
    res.render("login")
})

app.post('/register',async(req,res)=>{
    const {username,password} = req.body
    const user = User({username,password})
    await user.save()
    req.session.user_id = user.id
    res.redirect("/")
})

app.post("/login",async(req,res)=>{
    const {username,password} = req.body
    const foundUser = await User.findAndValidate(username,password)
    if(foundUser){
        req.session.user_id = foundUser.id
        res.redirect("/secret")
    }
    else[
        res.redirect("/login")
    ]
})

app.post("/logout",(req,res)=>{
    req.session.user_id = null
    res.redirect("/login")
})

app.get("/secret",requireLogin,(req,res)=>{

    res.render("secret")
})



app.listen(7000,()=>{
    console.log("Server listening at port 7000")
})