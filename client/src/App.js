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
import Pokemon from "./pages/Pokemon";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pokemon" element={<Pokemon />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
