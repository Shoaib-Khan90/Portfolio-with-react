import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState("Home");
  const [darkMode, setDarkMode] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Works", path: "/works" },
    { name: "Contact", path: "/contact" },
  ];

  // 🔥 Proper sync dark mode with body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`navbar ${darkMode ? "dark-nav" : ""}`}>
      <h1 className="h1">PORTFOLIO</h1>
      
      {/* NAV LINKS */}
      <nav>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                onClick={() => setActive(item.name)}
                className={`nav-link ${
                  active === item.name ? "active" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* SWITCH */}
      <div className="toggleWrapper">
        <input
          className="input"
          id="dn"
          type="checkbox"
          checked={darkMode}
          onChange={handleToggle}
        />
        <label className="toggle" htmlFor="dn">
          <span className="toggle__handler"></span>
        </label>
      </div>
    </div>
  );
}

export default Navbar;