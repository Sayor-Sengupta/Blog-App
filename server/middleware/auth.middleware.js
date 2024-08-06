import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const verify = async (req,res,next)=>{
    try{
        console.log("token",req.cookies.refreshToken);
        const token =
          req.cookies?.accessToken ||
          req.header("Authorization")?.replace("Bearer ", "");
         console.log(token);
        if (!token) {
          throw new (401, "Unauthorized request")();
        }
    
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findById(decodedToken?._id).select(
          "-password -refreshToken"
        );
        if (!user) {

          return res.status(701).json({"Message":"Invalid token"})
        }
    
        req.user = user;
        next();
      } catch (error) {

                res.status(601).json({"message":"invalid access tokeb","error":error.message})

      }


}
