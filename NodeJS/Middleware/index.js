const express = require("express")
const app = express()
const morgan = require("morgan")
const AppError = require("./AppError")

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
        // res.send("Sorry wrong password")
        // throw new Error("Password Required")
        throw new AppError("Password required",401)
    }
})



app.get("/dogs",(req,res)=>{
    res.send("Bark"+req.requestTime)
})

app.get("/secret",verifyPassword,(req,res)=>{
    res.send("Secret")
})

app.get("/admin",(req,res)=>{
    throw new AppError("You are not a admin",403)
})

app.use((req,res)=>{
    res.status(404).send("Not Found")
})

//Error handling middleware
//This middleware is triggered whenever there is an error
app.use((err,req,res,next)=>{
    // res.status(500).send("We got an error")
    // next(err) 
    //After putting the above line, express default error handler will be triggered
    //If above line is not given, only error middleware logic will be implemented, default error handler will not be triggered
    //Only if we add next(), default error handler will be triggered after middleware logic

    const {status=500,message="Something went Wrong"} = err
    res.status(status).send(message)
})

app.listen(5000,()=>{
    console.log("Server running at port 5000")
})