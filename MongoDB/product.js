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

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength:20
    },
    price:{
        type:Number,
        required:true,
        min: [0,"Price must be positive"]
    },
    onSale:{
        type:Boolean,
        default:false
    },
    categories:{
        type: [String]
    },
    qty:{
        online:{
            type:Number,
            default:0
        },
        inStore:{
            type:Number,
            default:0
        }
    },
    size:{
        type:String,
        enum:['S','M','L','XL']
    }
})

productSchema.methods.greet = function(){
    console.log("Hello")
    console.log(`- From ${this.name}`)
}

productSchema.methods.toggleOnSale = function(){
    this.onSale = !this.onSale
    return this.save()
}

productSchema.methods.addCategory = function(newCat){
    this.categories.push(newCat)
    return this.save()
}

productSchema.statics.fireSale = function(){
    return this.updateMany({},{onSale:true,price:0})
}

const Product = mongoose.model("Product",productSchema)
const earphone = Product({name:"Earphone",price:259})
phone.save()
const watch = Product({name:"Watch",price:2000})
watch.save()

Product.deleteOne({name:"Watch"}).then(res => console.log(res))

const shoe = Product({name:"Shoe",price:1500})
shoe.save()
.then(data => console.log(data))
.catch(err => console.log(err))

const comb = Product({name:"Comb",price:799})
comb.save().then(data => console.log(data)).catch(err => console.log(err))

const dummy = Product({name:"abcdefghijklmnopqrstuvwxyz",price:12})
dummy.save().then(data => console.log(data)).catch(err => console.log(err))

const negativePrice = Product({name:"lessthan0",price:-50})
negativePrice.save().then(data => console.log(data)).catch(err => console.log(err))

const shirt = Product({name:"Shirt",price:5000,categories:["Style","Fashion","Clothing"]})
shirt.save().then(data => console.log(data)).catch(err => console.log(err))

Product.findOneAndUpdate({name:"Shirt"},{price:2500},{new:true,runValidators:true})
.then(data => console.log(data))
.catch(err => console.log(err))

const dummy1 = Product({name:"dummy",price:-19}).save().then(data => console.log(data)).catch(err => console.log(err))

const pen = Product({name:"Pen",price:10}).save().then(data => console.log(data)).catch(err => console.log(err))
pen.greet()

const findProduct = async () => {
    const foundProduct = await Product.findOne({name:"Shirt"})
    console.log(foundProduct)
    await foundProduct.toggleOnSale()
    console.log(foundProduct)
    await foundProduct.addCategory('Ethnic')
    console.log(foundProduct)
}

findProduct()

Product.fireSale().then(res => console.log(res))

