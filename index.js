const express = require("express");
const { default: mongoose } = require("mongoose");
const dotenv= require("dotenv");
dotenv.config();
const app= express();
const userRoute = require("./routes/user");


// database connection
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Db success");
}).catch((err)=>{
    console.log(err);
})


//custom routes
app.use("/api/user",userRoute);


// express server init
app.listen(process.env.PORT || 3000,()=>{
    console.log("running at 3000");
})

