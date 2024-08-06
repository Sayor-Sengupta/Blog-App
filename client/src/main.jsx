import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { userContextProvider } from "./context/userContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <userContextProvider> */}
        <App />
      {/* </userContextProvider> */}
    </BrowserRouter> 
  </React.StrictMode>
);
