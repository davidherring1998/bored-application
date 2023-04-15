import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//*****
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//*****
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
