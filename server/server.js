import express from 'express'
import cors from 'cors'
import authRouter from './routes/auth.routes.js'
import connectMongoDB from './db/connectMongoDB.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import blogRouter from "./routes/blog.routes.js"
const app = express()

dotenv.config()
const corsOptions = {origin : 'http://localhost:5173' ,credentials:true}
const PORT = process.env.PORT || 5000
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser())


//routes
app.use("/users",authRouter)
app.use("/users/blog",blogRouter)
app.use(express.static(path.join(__dirname,"/client/dist")))
app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname,"client","dist","index.html"))
})



app.listen(PORT,()=>{
    console.log(`app is listening - ${PORT}`);
    connectMongoDB()
})
