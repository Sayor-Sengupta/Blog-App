import mongoose, { Schema } from "mongoose";


const blogSchema = new mongoose.Schema({
    title : {
        type:String,
        required:true
    },
    description:{
        type:String
    },
    content:{
        type:String,

    },
    cover:{
        type:String
        
    },
    auther:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }



    


},{
    timestamps
})

const Blog = mongoose.model("Blog",blogSchema)
export default Blog