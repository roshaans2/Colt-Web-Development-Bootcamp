const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')

require('dotenv').config()


const Product = require('./models/product');

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("DB Connected")
    })
    .catch(err => {
        console.log("Error")
        console.log(err)
    })


const categories = ['fruit','vegetable','dairy']

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

app.get("/products/new",(req, res) => {
    res.render('products/new',{categories})
});

app.get("/products",async (req,res)=>{
    const {category} = req.query
    if(category){
        const products = await Product.find({category:category})
        res.render("products/index",{products,category})
    }
    else{
        const products = await Product.find({})
        res.render("products/index",{products,category:'All'})
    }
})


app.get("/products/:id",async(req,res)=>{
    const {id} = req.params
    const product = await Product.findById(id)
    res.render("products/show",{product})
})

app.get("/products/:id/edit", async (req,res)=>{
    const {id} = req.params
    const product = await Product.findById(id)
    res.render("products/edit",{product,categories})
})

app.post("/products",async(req,res)=>{
    const newProduct = Product(req.body)
    newProduct.save()
    console.log(req.body)
    res.redirect("/products")
})

app.put("/products/:id", async(req,res)=>{
    const {id} = req.params
    const product = await Product.findByIdAndUpdate(id,req.body,{runValidators:true,new:true})
    res.redirect(`/products/${product.id}`)
})

app.delete("/products/:id",async(req,res)=>{
    const {id} = req.params;
    await Product.findByIdAndDelete(id)
    res.redirect("/products")
})

app.listen(5000, () => {
    console.log("Server connected at port 5000")
})







