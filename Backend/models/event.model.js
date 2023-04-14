const mongoose=require("mongoose");
const eventSchema=mongoose.Schema({
    title:String,
    description:String,
    game:String,
    total_player:Number,
    start_time: {
        hours: {
            type: Number, required: true, min: 0, max: 23
        },
        minutes: {
            type: Number, required: true, min: 0, max: 59
        },
        seconds: {
            type: Number, required: true, min: 0, max: 59
        }
    },
    userID:String
},
{
    timestamps:true
}

)

const EventModel=mongoose.model("events",eventSchema)

module.exports={EventModel}


// "title":"Crack Football",
//     "description":"There are 11 players",
//     "game":"Football",
//     "total_player":11,
//      "start_time": {
//         "hours": 22,
//         "minutes": 0,
//         "seconds": 0
//     }


