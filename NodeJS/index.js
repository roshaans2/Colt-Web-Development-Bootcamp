const express = require("express");
const app = express();

//This callback runs whenever a request is made.
// app.use(()=>{
//     console.log("We got a new request")
// })
// app.use((req,res)=>{
//     res.send("Hi, this is your response")
// })

app.get('/',(req,res)=>{
    res.send("Welcome to home page")
})

app.get('/cats',(req,res)=>{
    res.send("Meow!!")
})

app.get('/dogs',(req,res)=>{
    res.send("Bow!!")
})

app.get("/r/:subreddit",(req,res)=>{
    const {subreddit} = req.params
    res.send(`<h1>Browsing the ${subreddit} <h1>`)
})

app.get("/search",(req,res)=>{
    const {q} = req.query;
    res.send(`<h1>Your query : ${q} </h1>`)
})

app.post('/cats',(req,res)=>{
    res.send("Hi, post request")
})

app.get("*",(req,res)=>{
    res.send("I don't know that path")
})

app.listen(7070,()=>{
    console.log("Server running at port 7070");
})