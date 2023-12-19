const express = require("express")
const app = express()
const morgan = require("morgan")

app.use(morgan('common'))
// app.use((req,res,next)=>{
//     console.log("I am first middleware")
//     next()
// })

// app.use((req,res,next)=>{
//     req.requestTime = Date.now()
//     next()
// })

app.use("/dogs",(req,res,next)=>{
    console.log("I love dogs")
    next()
})

const verifyPassword = ((req,res,next)=>{
    const {password} = req.query
    if(password === 'chicken'){
        next()
    }
    else{
        res.send("Sorry wrong password")
    }
})



app.get("/dogs",(req,res)=>{
    res.send("Bark"+req.requestTime)
})

app.get("/secret",verifyPassword,(req,res)=>{
    res.send("Secret")
})

app.use((req,res)=>{
    res.status(404).send("Not Found")
})

app.listen(5000,()=>{
    console.log("Server running at port 5000")
})