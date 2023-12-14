const express = require("express")
const app = express();


app.use(express.json())

app.get("/tacos",(req,res)=>{
    res.send("GET/tacos response");
})

app.post("/tacos",(req,res)=>{
    const {meat,qty} = req.body
    res.send(`Hey, Have your ${qty} ${meat} tacos`);
})

app.listen(3000,(req,res)=>{
    console.log("Port running at port 8000");
})