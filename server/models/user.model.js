import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required : true
    },
    userName:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required: true,
        minlength:6
    }, 
    refreshToken:{
        type:String
    }


},{timestamps:true})

userSchema.pre("save",async function(next){
    if(!this.isModified("password"))return next();
    this.password = await  bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}
userSchema.methods.generateAccessToken =  function (){
    return jwt.sign({
        _id:this._id,
        email: this.email,
        username: this.username,
        fullName: this.fullName
    },process.env.ACCESS_TOKEN_SECRET,{
        // expiresIn:process.env.ACCESS_TOKEN_EXPIRY,
        expiresIn:"1d"
    })
}
userSchema.methods.generateRefreshToken = function (){
    return jwt.sign({
        _id:this._id,
    },process.env.REFRESH_TOKEN_SECRET,{
        expiresIn:"1d"
        // expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    })
}

//make a login file codium


const User = mongoose.model("User",userSchema)
export default User