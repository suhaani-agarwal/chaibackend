import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express()

app.use(()=>{
    origin : process.env.CORS_ORIGIN
    credentials : true

})


//MIDDLEWARES 
app.use(express.json({limit : "16kb"}))
app.use(express.utlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())//for cookies



export { app }