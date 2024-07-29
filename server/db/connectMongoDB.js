import mongoose from "mongoose";

const connectMongoDB = async ()=>{
    try {
            const conn = await mongoose.connect(process.env.MONGO_URL)
            console.log("MongoDb connected at" , conn.connection.host);
        

    } catch (error) {
        console.log("error while connecting to mongodb",error.message);
    }
}
export default connectMongoDB