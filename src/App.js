import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import  Login  from "./components/buvva_login/buvva_login";
import Home from "./components/home/home";
import  Signin  from "./components/signin";
import Signup from "./components/signup";

function App() {
  return (
    
   <>

    
    <BrowserRouter>
        <Routes>
      
            <Route path="/" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/home" element={<Home/>}/>
            
        </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
