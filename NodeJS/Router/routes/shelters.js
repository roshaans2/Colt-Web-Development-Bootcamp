const express = require("express")
const router = express.Router()


router.get("/",(req,res)=>{
    res.send("Viewing all shelters")
})

router.get("/:id",(req,res)=>{
    res.send("Viewing one Shelter")
})

router.post("/",(req,res)=>{
    res.send("Adding one shelter")
})

router.put("/:id/edit",(req,res)=>{
    res.send("Editing one shelter")
})

module.exports = router