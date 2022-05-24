const router = require("express").Router();
router.get("/usertest",(req,res)=>{
res.send("test success");
});




module.exports = router