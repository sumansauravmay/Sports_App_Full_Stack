const express=require("express");
const { EventModel } = require("../models/event.model");

const eventhomeRouter=express.Router();

eventhomeRouter.get("/",async(req,res)=>{
    try{
     let data=await EventModel.find()
     res.send(data)
    }
    catch(err){
        console.log(err)
    }

})


module.exports={eventhomeRouter}
