const express = require("express");
const app = express();
const path = require("path");
const {v4: uuid} = require("uuid");
const methodOverride = require("method-override")


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs");
app.use(methodOverride("_method"))

let comments = [
    {
      "id":uuid(),
      "username": "Alex",
      "comment": "That's great"
    },
    {
      "id":uuid(),
      "username": "Emma",
      "comment": "Fantastic job on this project!"
    },
    {
      "id":uuid(),
      "username": "Max",
      "comment": "I really enjoyed reading this. Well done!"
    },
    {
      "id":uuid(),
      "username": "Sophie",
      "comment": "Interesting topic. Can't wait for more content!"
    }
  ]
  

app.get("/comments",(req,res)=>{
    res.render("comments/index",{comments})
})

app.get("/comments/new",(req,res)=>{
  res.render("comments/new")
})

app.get("/comments/:id",(req,res)=>{
  const {id} = req.params;
  comment = comments.find(c => c.id === id);
  res.render('comments/show',{comment})
})

app.post("/comments",(req,res)=>{
  const {username,comment} = req.body
  console.log(req.body)
  comments.push({username,comment,id:uuid()})
  res.redirect("/comments")
})

app.get("/comments/:id/edit",(req,res)=>{
  const {id} = req.params;
  const comment = comments.find(c => c.id === id);
  res.render("comments/edit",{comment})
})

app.patch("/comments/:id",(req,res)=>{
  const {id} = req.params;
  const newCommentText = req.body.comment;
  const foundcomment = comments.find(c => c.id === id);
  foundcomment.comment = newCommentText;
  res.redirect("/comments")
})

app.delete("/comments/:id",(req,res)=>{
  const {id} = req.params;
  comments = comments.filter(c => c.id !== id)
  res.redirect("/comments")

})

app.listen(8000,(req,res)=>{
    console.log("Server running at port 8000")
})