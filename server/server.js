import express from 'express'
import cors from 'cors'
import authRouter from './routes/auth.routes.js'
import connectMongoDB from './db/connectMongoDB.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
const app = express()
dotenv.config()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(cookieParser())


//routes
app.use("/users",authRouter)




app.listen(PORT,()=>{
    console.log(`app is listening at ${PORT}`);
    connectMongoDB()
})
