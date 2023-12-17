const express = require("express")
const app = express()
const path = require("path")

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

const mongoose = require("mongoose")
require('dotenv').config()
const MONGO_URI = process.env.MONGO_URI
mongoose.connect(MONGO_URI)
.then(()=>{
    console.log("DB Connected")
})
.catch((err)=>{
    console.log(err);
})




app.listen(5000,()=>{
    console.log("Server running at port 5000")
})