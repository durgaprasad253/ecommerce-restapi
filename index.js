const express = require("express");
const { default: mongoose } = require("mongoose");
const dotenv= require("dotenv");
dotenv.config();
const app= express();
app.listen(process.env.PORT || 3000,()=>{
    console.log("running at 3000");
})
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Db success");
}).catch((err)=>{
    console.log(err);
})
