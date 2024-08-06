import React,{useState} from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Overview from "./Overview";

const HomePage = () => {
  const [active,setActive] = useState("Login")
   
  return (
    <> 
      <div className="h-screen flex flex-col items-center pt-20 ">
       
        <div className="flex justify-center gap-10 text-5xl text-white  items-center mb-40">
        
          <div className={`cursor-pointer  hover:text-blue-200 ${active==="Signup"?"text-blue-300":""}`} onClick={()=>
            setActive("Signup")
          }>Signup</div>
          <div className={`cursor-pointer  hover:text-blue-200  ${active==="Login"?"text-blue-300":""}`} onClick={()=>
            setActive("Login")
          }>Login</div>
        </div>
        <div className="flex justify-center">
          
        {active === "Login" && <Login />}
        {}
          {active === "Signup" && <SignUp />}
         
        </div>
      </div>
    </>
  );
};

export default HomePage;

