const fs = require("fs");

// fs.mkdir('Async',{recursive:true},(err)=>{
//     console.log("In the callback!")
//     if(err) throw err;
// })
// console.log("I come after mkdir in the file!!")

fs.mkdirSync('Sync',{recursive:true},(err)=>{
    console.log("In the callback")
    if(err){
        throw err;
    }
})
console.log("I come after mkdir in the file!!")