const mongoose = require("mongoose")
require('dotenv').config()
const MONGO_URI2 = process.env.MONGO_URI2
mongoose.connect(MONGO_URI2)
.then(()=>{
    console.log("DB Connected")
})
.catch((err)=>{
    console.log(err);
})

const personSchema = mongoose.Schema({
    first:String,
    last:String
})

personSchema.virtual('fullname').get(function(){
    return `${this.first} ${this.last}`
})

personSchema.pre('save',async function(){
    console.log("Before saving")
})
personSchema.post('save',async function(){
    console.log("After saving saving")
})

const Person = mongoose.model("Person",personSchema)

const jerald = Person({first:"Jerald",last:"Joseph"})
console.log(jerald.fullname)

jerald.save()