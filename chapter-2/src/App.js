import React from "react";
import logo from "./assets/logo.svg";
import Header from "./components/Header";
import "./App.css";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo} />
        <Routes>
          <Route path="/" element={<Profile userName="Daddy2054" />} />
          <Route path="/projects" element={<Projects userName="Daddy2054" />} />
          <Route
            path='/projects/:name'
            element={<ProjectDetail userName='Daddy2054' />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
