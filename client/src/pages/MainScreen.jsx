import React from "react";
import Header from "../components/Header";
import Posts from "../components/Posts";
import RecentPost from "../components/RecentPost";

const MainScreen = () => {
  return (
    <>
      <div className="mx-5 mb-10">
        <Header />
        <h1 className="w-full text-center text-5xl mb-20">Recent Posts </h1>
        <div className=" flex flex-row flex-wrap gap-10 justify-center  ">
          <Posts
            time="21/2/24"
            Title="simplest and fastest way to get up"
            Desc="The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool"
          />
          <Posts
            time="21/2/24"
            Title="simplest and fastest way to get up"
            Desc="The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool"
          />
          <Posts
            time="21/2/24"
            Title="simplest and fastest way to get up"
            Desc="The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool"
          />
          <Posts
            time="21/2/24"
            Title="simplest and fastest way to get up"
            Desc="The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool"
          />
          <Posts
            time="21/2/24"
            Title="simplest and fastest way to get up"
            Desc="The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool"
          />
          <Posts
            time="21/2/24"
            Title="simplest and fastest way to get up"
            Desc="The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool"
          />
          <Posts
            time="21/2/24"
            Title="simplest and fastest way to get up"
            Desc="The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool"
          />
          <Posts
            time="21/2/24"
            Title="simplest and fastest way to get up"
            Desc="The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool"
          />
          <Posts
            time="21/2/24"
            Title="simplest and fastest way to get up"
            Desc="The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool"
          />
          <Posts
            time="21/2/24"
            Title="simplest and fastest way to get up"
            Desc="The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool"
          />
          <Posts
            time="21/2/24"
            Title="simplest and fastest way to get up"
            Desc="The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool"
          />
          <Posts
            time="21/2/24"
            Title="simplest and fastest way to get up"
            Desc="The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool"
          />
          <Posts
            time="21/2/24"
            Title="simplest and fastest way to get up"
            Desc="The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool"
          />
          <Posts
            time="21/2/24"
            Title="simplest and fastest way to get up"
            Desc="The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool"
          />
        </div>
      </div>
    </>
  );
};

export default MainScreen;
