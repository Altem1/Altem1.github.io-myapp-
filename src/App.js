import React from "react";
import { Routes, Route } from "react-router-dom";
import Content from "./components/Content";
import AppAcerca from "./components/AppAcerca";
import ContentProjects from "./components/ContentProjects";
import Contactame from "./pages/contactame";
import Admin from "./components/Admin";
import Login from "./components/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Content />} />
      <Route path="/acercade" element={<AppAcerca />} />
      <Route path="/proyectos" element={<ContentProjects />} />
      <Route path="/contactame" element={<Contactame />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/login" element={<Login />}/>
    </Routes>
  );
};

export default App;