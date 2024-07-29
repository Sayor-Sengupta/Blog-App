import React from "react";

const Posts = ({ time, Title, Desc }) => {
  return (
    <div className="max-w-xs border hover:bg-gray-800  ">
      <img
        src="https://images.pexels.com/photos/15558703/pexels-photo-15558703/free-photo-of-view-of-seats-in-a-restaurant-with-wooden-walls-and-string-lights.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        className="h-48 w-full mb-4"
        alt="Post Image"
      />
      <div className="flex flex-col items-start justify-start gap-4 px-5 w-full">
        <p>Time: {time}</p>
        <p className="font-bold text-xl ">{Title}</p>
        <p className="font-semibold ">
          {Desc}
        </p>
      </div>
    </div>
  );
};

export default Posts;
