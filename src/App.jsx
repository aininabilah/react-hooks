// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "../src/Router/PrivateRoute";
import Header from "./components/Header";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Media from "./components/Media";
import Dashboard from "./components/Dashboard";
import Help from "./components/Help";
import Login from "./components/Login"; 
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  const isAuthenticated = localStorage.getItem("authenticated") === "true";

  return (
    <ThemeProvider>
    <Router>
      <div className="App">
        <Header />
        <Routes>
        <Route
                exact
                path="/"
                element={<PrivateRoute element={<Dashboard />} />}
              />
              <Route
                path="/about"
                element={<PrivateRoute element={<About />} />}
              />
              <Route
                path="/contacts"
                element={<PrivateRoute element={<Contacts />} />}
              />
              <Route
                path="/media"
                element={<PrivateRoute element={<Media />} />}
              />
              <Route
                path="/help"
                element={<PrivateRoute element={<Help/>} />}
              />
              <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
    </ThemeProvider>
  );
};

export default App;
