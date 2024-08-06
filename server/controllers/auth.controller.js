import Blog from "../models/blogs.model.js";
import User from "../models/user.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import {asyncHandler} from "../utils/asyncHandler.js"
import { uploadOnCLoudnary } from "../utils/cloudnary.js";
const generateAccessRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken =user.generateAccessToken();
    const refreshToken =  user.generateRefreshToken();
    //   console.log("accesstoken",accessToken,"refresh",refreshToken);
    // console.log("acess" ,accessToken,"ref",refreshToken);
    user.refreshToken = refreshToken;
    await user.save({ validBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    console.log("error", error.message);
    throw error
  }
};

export const signup = async (req, res) => {
  //get user data
  // console.log("req.body", req.body);
  const { fullName, userName, password } = req.body;

  //check if anything is empty
  if ([fullName, userName, password].some((field) => field?.trim() == "")) {
    // throw new ApiError(400,"All fields are required")
    return res.status(402).json({ "message":"All fields are required" });
  }
  //check whether user exists previously

  const existingUser = await User.findOne({ userName });
  // console.log("existingUser", existingUser);
  if (existingUser) {
    // throw new ApiError(409,"Already Exists ")
    return res.status(409).json({"message": "Already Exists "});
  }
  if(password.length<6){
    return res.status(401).json({" error": "password more than 6" });
  }
  //create User
  const user = await User.create({
    fullName,
    userName: userName,
    password,
  });

  //delete Passord and Refresh Token
  const CreatedUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
 
  return res.status(201).json({ CreatedUser });
};
export const login = async (req, res) => {
  //get details from user
  const { userName, password } = req.body;
  //check whether both fields are there

  if (!userName) {
    return res.status(409).json({
      message: "userName field required",
    });
  }
  //check whether user is present in db
  const user = await User.findOne({ userName });

  //check whether password is correct
  const passwordCorrect = user.isPasswordCorrect(password);

  if (!passwordCorrect) {
    return res.status(419).json({ password: "incorrect" });
  }

  const { accessToken, refreshToken } = await generateAccessRefreshToken(
    user._id
  );
    

  
  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  const options = {
    httpOnly: true,
    secure: true,
  };
  console.log("access",refreshToken);

  return res
    .status(200)
    .cookie("refreshToken", refreshToken, options)
    .cookie("accessToken", accessToken, options)
    .json({
      "data": { loggedInUser, refreshToken, accessToken, },
      "message": "logged in succesfullt",
    });
}; 
export const logout =asyncHandler( async (req, res) => {
    console.log("req.id",req.user._id);
  await User.findByIdAndUpdate(req.user._id, {
    $set: {
      refreshToken: undefined,
    },
  });
  const options = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(202)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json({ message: "logged out succesfully" });
});



  export const CreateBlogsDetailsFromUser =async (req,res)=>{


          //get data from req.body
          const {title,description,content} = req.body
          //check whether title and content are not empty
          if ([title,description,content].some((fields)=>fields?.trim()=="")){
            return res.status(595).json({message:"all field are required"})
          }

          //handle images

         
          const ThumbnailLocalPath = req.file?.path;

          // console.log(ThumbnailLocalPath);
          //checking wheter thumnail exists
          if(!ThumbnailLocalPath){
            return res.status(521).json({"message":"Thumnail does exist"})
          }

          //upload to cloudinary
          const upload = await uploadOnCLoudnary(ThumbnailLocalPath)
          // console.log(upload);
          // upload the details to mongodb
          if(!description){
            description = " "
          }

          if(!upload.url || !upload) return res.json({"error":"upload.url not found"})
          const blogData = await Blog.create({
            Thumbnail:upload.url,
            title,
            description,
            content,
            

          })

          //send res
          return res.status(200).json({message:"Blog created sucessFully",blogData})

           

  }
  export const deletePost = async(req,res)=>{
    const {id} = req.params;
    const data = await Blog.findById(id)

    if(!data){
      return res.status(404).json({"message":"blog doesnt exist"})

    }
  
  await data.deleteOne();
  return res.status(200).json({"message":"blog deleted"})

  }
 export const getPost = async (req,res)=>{
    
    const blog = await Blog.find()
     
    console.log("blog",blog);

    res.status(200).json({blog})

    
} 
export const getPostById = async (req,res)=>{
  const {id} = req.params;
  const blog = await Blog.findById(id)
  res.status(200).json({blog})
}

  