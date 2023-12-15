const mongoose = require("mongoose")
mongoose.connect("")
.then(()=>{
    console.log("DB Connected")
})
.catch((err)=>{
    console.log(err);
})

const movieSchema = new mongoose.Schema({
    title:String,
    year:Number,
    score:Number,
    rating:String
})

const Movie = mongoose.model("Movie",movieSchema)
// const jawan = new Movie({title:"Jawan",year:2023,score:8.1,rating:"UA"})
// jawan.save()

// Movie.insertMany([
//     {
//       title: "Kaithi",
//       year: 2019,
//       score: 8.5,
//       rating: "U"
//     },
//     {
//       title: "Super Deluxe",
//       year: 2019,
//       score: 8.4,
//       rating: "U/A"
//     },
//     {
//       title: "Vada Chennai",
//       year: 2018,
//       score: 8.6,
//       rating: "A"
//     },
//     {
//       title: "Peranbu",
//       year: 2018,
//       score: 9.0,
//       rating: "U/A"
//     },
//     {
//       title: "96",
//       year: 2018,
//       score: 8.7,
//       rating: "U"
//     }
//   ]).then((data)=>{
//     console.log("It worked")
//     console.log(data)
//   })

// Movie.find({}).then(data => console.log(data))
// Movie.findOne({title:"Vada Chennai"}).then(data => console.log(data))
// Movie.find({year:{$gt:2018}}).then(data => console.log(data))
// Movie.find({year:{$lte:2018}}).then(data => console.log(data))
// Movie.findById('657c40b1fef5ab291bea7afb').then(data => console.log(data))
// Movie.findOneAndUpdate({title:'Kaithi'},{score:8.7},{new:true}).then(res => console.log(res))
// Movie.updateOne({title:"Jawan"},{score:7.6}).then(res => console.log(res))
// Movie.findOneAndDelete({title:'Jawan'}).then(msg => console.log(msg))
Movie.deleteMany({year:{$lte:2000}})


