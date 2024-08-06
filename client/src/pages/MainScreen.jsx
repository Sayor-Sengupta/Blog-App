import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Posts from "../components/Posts";
import axios from "axios";
import { extractDateFromCreatedAt } from "../utils/extractedDate";
import { Link } from "react-router-dom";

const MainScreen = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/users/blog/getPost");
        console.log(res.data);
        setPosts(res.data.blog);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching posts:", error)
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <div className="mx-5 mb-10">
        <Header />
        <h1 className="w-full text-center text-5xl mb-20">Recent Posts</h1>
        {loading ? (
        <div className="flex flex-col gap-4 ">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
        ) : (
          <div className="flex flex-row flex-wrap gap-10 justify-center">
            {posts.length > 0 ? (
              posts.map((post) => (
                <Link to={`/post/${post._id}`} key={post._id}>
                  <Posts
                    Thumbnail={post.Thumbnail}
                    time={extractDateFromCreatedAt(post.createdAt)}
                    Title={post.title}
                    Desc={post.description}
                  />
                </Link>
              ))
            ) : (
              <p>No posts available.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default MainScreen;
