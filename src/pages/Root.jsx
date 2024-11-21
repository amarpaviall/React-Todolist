import React from "react";
import App from "../components/App";
import NavBar from "../components/NavBar";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function Root() {
  return (
    <div className="todo-app-container">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="" element={<App />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Root;
