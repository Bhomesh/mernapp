const express = require('express')
const router = express.Router()

router.post("/createuser", async(req,res)=>{
    try{
        User.create({
            name: "Bhomesh Razdan",
            password: "123",
            email:"unknown@gmail.com",
            location:"Unknown"
        })
        res.json({success:true});
    }
    catch(error){
        console.log(error)
        res.json({success:false});
    }
})

module.exports = CreateUser();