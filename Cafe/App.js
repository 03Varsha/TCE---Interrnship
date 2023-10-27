import React from "react";
import "./assets/css/style.css";
import{ BrowserRouter , Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Login from "./components/Login";

import Signup from "./components/Signup";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Menu />      
      <Contact />  
      <Footer />
    </>
  );
};

export default App;
