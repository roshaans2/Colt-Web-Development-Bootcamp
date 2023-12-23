const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("GET Dogs")
})
router.post("/",(req,res)=>{
    res.send("POST Dogs")
})
router.put("/:id",(req,res)=>{
    res.send("Update Dogs")
})
router.delete("/:id",(req,res)=>{
    res.send("Delete Dogs")
})

module.exports = router