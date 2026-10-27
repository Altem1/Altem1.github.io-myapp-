import React from "react";
import { Routes, Route } from "react-router-dom";
import Content from "./components/Content";
import AppAcerca from "./components/AppAcerca";
import ContentProjects from "./components/ContentProjects";
import Contactame from "./pages/contactame";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Content />} />
      <Route path="/acercade" element={<AppAcerca />} />
      <Route path="/proyectos" element={<ContentProjects />} />
      <Route path="/contactame" element={<Contactame />} />
    </Routes>
  );
};

export default App;