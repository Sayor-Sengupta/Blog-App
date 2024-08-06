import React, { useState } from "react";
import HomeButtons from "../components/Buttons/HomeButtons";
import axios from "axios";
import { Navigate } from "react-router-dom";
const SignUp = ({ name }) => {
  const [fullName, SetFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, SetPassword] = useState("");
  const [redirect, SetRedirect] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/users/signup", {
        fullName,
        userName,
        password,
      });
      console.log(res.status);

     if (res.status == 201) {
        SetRedirect(true);
      } 
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert("User already exists");
      } else {
        console.error('Error:', error.message);
      }
    }
  };
  if (redirect) {
    return <Navigate to={"/Home"} />;
  }

  return (
    <>
      <div className="flex  justify-center items-center">
        <form
          className="flex flex-col justify-center gap-5 "
          onSubmit={handleSubmit}
        >
          <label className="input input-bordered input-accent flex items-center text-lg p-3 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Fullname"
              value={fullName}
              onChange={(e) => SetFullName(e.target.value)}
            />
          </label>
          <label className="input input-bordered input-accent flex items-center text-lg p-3 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </label>
          <label className="input input-bordered input-info flex items-center gap-2 text  p-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow pr-16"
              placeholder="password"
              value={password}
              onChange={(e) => SetPassword(e.target.value)}
            />
          </label>

          <div className="flex justify-center">
            <HomeButtons name="Signup" />
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
