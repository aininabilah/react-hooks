// src/components/Header.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PadiLogo from "../images/Padi.jpg";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem("login") === "true";
  const { isDarkMode, toggleTheme } = useTheme();
  const handleLogout = () => {
    sessionStorage.removeItem("login"); status
    navigate("/login"); 
    window.location.reload(); 
  };

  return (
    <header className="pt-3 text-white dark:bg-gray-800">
      <nav>
        <ul className="flex space-x-4 justify-center mb-0 pl-0 ">
          <Link to="/">
            <img src={PadiLogo} alt="Logo" className="h-10 mb-2 mr-10" />
          </Link>
          <li>
            <Link to="/" className="font-semibold text-cyan-700 hover:text-cyan-900 mx-8 text-decoration-none pt-4 dark:text-white">
              Beranda
            </Link>
          </li>
          <li>
            <Link to="/about" className="font-semibold text-cyan-700 hover:text-cyan-900 mx-8 text-decoration-none dark:text-white">
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link to="/help" className="font-semibold text-cyan-700 hover:text-cyan-900 mx-8 text-decoration-none dark:text-white">
              Bantuan
            </Link>
          </li>
          <li>
            <Link to="/media" className="font-semibold text-cyan-700 hover:text-cyan-900 mx-8 text-decoration-none dark:text-white">
              Media
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="font-semibold text-cyan-700 hover:text-cyan-900 mx-8 text-decoration-none dark:text-white">
              Kontak
            </Link>
          </li>
          {isLoggedIn ? (
            <li>
              <button
                onClick={handleLogout}
                className="font-semibold text-sm text-cyan-900 text-decoration-none border-2 border-cyan-600 rounded px-3 py-1 mt-0 hover:border-cyan-900 dark:text-white "
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link
                to="/login"
                className="font-semibold bg-cyan-600 text-white hover:bg-cyan-900 mx-8 text-decoration-none border-2  rounded px-3 py-1 hover:border-cyan-900 pb-2 dark:text-white"
              >
                Login
              </Link>
            </li>
          )}
          <li className="flex items-center ml-4 mb-3">
            <label
              htmlFor="theme-toggle"
              className="relative inline-flex items-center cursor-pointer"
            >
              <input
                id="theme-toggle"
                type="checkbox"
                checked={isDarkMode}
                onChange={toggleTheme}
                className="sr-only"
              />
              <div className="w-11 h-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
              <span
                className={`absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                  isDarkMode ? "translate-x-5" : ""
                }`}
              />
            </label>
            
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
