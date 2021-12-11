import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import EditData from "./Components/EditData";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<EditData />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
