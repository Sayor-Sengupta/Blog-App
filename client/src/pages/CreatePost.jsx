import React from "react";
import MyComponent from "../utils/QuillEditor";
const CreatePost = () => {
  return (
    <div className="px-20 py-20">

      <h1 className="text-bold text-4xl mb-10 border-b-4 inline-block">Write Down Your Posts Below </h1>
      <form>
        <div className="flex flex-col gap-10">
          <input
            type="text"
            placeholder="Title"
            className="input input-bordered w-full max-w-xs "
          />
          
          <input
            type="file"
            className="input input-bordered w-full max-w-xs h-full"
          />{" "}
          <MyComponent />
        </div>

        <div className="flex justify-center mt-10">
          <button className="btn btn-outline btn-accent">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
