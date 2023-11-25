import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../views/Home/Home";
import {App} from "../App";
import { Resume } from "../views/Resume/Resume";
import { Projects } from "../views/Projects/Projects";
import { Skills } from "../views/Skills/Skills";
import { Certifications } from "../views/Certifications/Certifications";
import { Contact } from "../views/Contact/Contact";

export function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="resume" element={<Resume />} />
      <Route path="projects" element={<Projects />} />
      <Route path="skills" element={<Skills />} />
      <Route path="certifications" element={<Certifications />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}
