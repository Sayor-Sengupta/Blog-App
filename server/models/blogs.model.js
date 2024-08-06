import mongoose, { Schema } from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      req: true,
    },
    content: {
      type: String,
      required: true,
    },
    Thumbnail: {
      type: String,
      required: true,
    },
    auther: {
      type: Schema.Types.ObjectId,
      ref: "User",
    }
   
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
