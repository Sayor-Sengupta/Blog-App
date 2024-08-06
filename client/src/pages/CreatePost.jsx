import React, { useState } from "react";
import MyComponent from "../utils/QuillEditor";
import axios from "axios";
import { Navigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [Thumbnail, setThumbnail] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false); // State for loading spinner

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!title || !description || !content || !Thumbnail) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true); // Start loading

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("content", content);
    formData.append("Thumbnail", Thumbnail);

    try {
      const res = await axios.post("https://blog-app-ruc6.onrender.com/users/blog/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(res);
  
      if (res.status === 200) {
        setRedirect(true);
      } else {
        alert("An error occurred. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (redirect) {
    return <Navigate to="/Home" />;
  }

  return (
    <div className="px-20 py-20">
      <h1 className="text-bold text-4xl mb-10 border-b-4 inline-block">
        Write Down Your Posts Below
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-10">
          <input
            type="text"
            placeholder="Title"
            className="input input-bordered w-full max-w-xs"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            className="input input-bordered w-full max-w-xs"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="file"
            className="input input-bordered w-full max-w-xs h-full"
            onChange={(e) => setThumbnail(e.target.files[0])}
          />
          <MyComponent value={content} onChange={setContent} />
        </div>

        <div className="flex justify-center mt-10">
          <button className="btn btn-outline btn-accent" type="submit" disabled={loading}>
            {loading ? (
              <span className="loading loading-spinner loading-xs"></span>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
