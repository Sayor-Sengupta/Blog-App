import React, { useState } from "react";

const Posts = ({ time, Title, Desc, Thumbnail }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 30; // Set your character limit here

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-xl w-64 border hover:bg-gray-800 pb-5 min-h-96 max-h-96 shadow-md overflow-hidden ">
      
      <img
        src={Thumbnail}
        className="h-48 w-full mb-4"
        alt="Post Image"
      />
      <div className="flex flex-col items-start justify-start gap-3 px-5 w-full">
        <p className="text-sm">{time}</p>
        <p className="font-bold text-xl">   {isExpanded ? Title : `${Title.substring(0, maxLength)}...`}
          {Desc.length > maxLength && (
            <span
              onClick={handleToggle}
              className="text-blue-500 cursor-pointer"
            >
    
            </span>
          )}</p>
        <p className="font-semibold">
          {isExpanded ? Desc : `${Desc.substring(0, maxLength)}...`}
          {Desc.length > maxLength && (
            <span
              onClick={handleToggle}
              className="text-blue-500 cursor-pointer"
            >
              {isExpanded ? " Show less" : " Read more"}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Posts;
