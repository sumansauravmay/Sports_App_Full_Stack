const express=require("express")
const {userRouter}=require("./routes/user.route");
const {connection}=require("./config/db");

require("dotenv").config();
const cors=require("cors")
const app=express()

app.use(cors({
    origin:"*"
}))

app.use(express.json())

app.use("/",userRouter)


app.listen(process.env.port,async()=>{
    try{
        await connection;
        console.log(`port is running on ${process.env.port}`)
    }
    catch(err){
        console.log(err)
    }
})



