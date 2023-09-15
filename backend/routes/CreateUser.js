const express = require('express')
const router = express.Router()

router.post("/createuser", async(req,res)=>{
    try{
        User.create({
            name: "nobgv",
            password: "1",
            email:"ndlsjbfls@mgna.comn",
            location:"bsdgbfs"
        })
        res.json({success:true});
    }
    catch(error){
        console.log(error)
        res.json({success.false});
    }
})