import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { extractDateFromCreatedAt } from "../utils/extractedDate";


const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(
        `http://localhost:5000/users/blog/getPostById/${id}`
      );
      setPost(res.data.blog);
      console.log(res.data);
      setLoading(false);
    };
    fetchPost();
  }, []);
  
  return (
    <>
      <div className="flex flex-col gap-5 w-full px-80 py-10 items-center ">
        {loading ? (
          <div className="flex w-52 flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        ) : (
          <>
            <img src={post.Thumbnail} alt="" className="h-96 w-full " />

            <h1>{extractDateFromCreatedAt(post.createdAt)}</h1>
            <div>
              <h1 className="text-2xl">{post.title}</h1>
            </div>

            <div className="text-xl">{post.description}</div>
            <div
              className="text-xl"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
          </>
        )}
      </div>
    </>
  );
};

export default PostPage;
