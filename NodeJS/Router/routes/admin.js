const express = require("express")
const router = express.Router()

router.use((req,res,next)=>{
    if(req.query.isAdmin){
        next()
    }
    else{
        res.send("Not a admin")
    }
})


router.get("/topsecret",(req,res)=>{
    res.send("This is top secret")
})

router.get("/deleteAll",(req,res)=>{
    res.send("Ok, I deleted all")
})

module.exports = router