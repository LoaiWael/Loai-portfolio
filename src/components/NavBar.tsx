import { NavLink } from "react-router-dom";
import $ from 'jquery'
import "./NavBar.css";
import { useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";

export default function NavBar() {
  const { themeMode, applyTheme } = useTheme();

  useEffect(() => {
    if ($(window).width()! < 445) {
      $(".nav-links").slideUp();
    }
    $(".hamburger").click(function () {
      $(".nav-links").css("visibility", "visible");
      $(".nav-links").slideToggle("fast");
    });
  }, [])

  return (
    <header>
      <nav>
        <span className="logo-name">.Loa项目'</span>
        <ul className="nav-links">
          <li>
            <NavLink
              className="nav-buttons"
              to="/"
              id="home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-buttons" to="/timeline" id="timeline">
              Timeline
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-buttons"
              id="my-workshop"
              to="/workshop"
            >
              My workshop
            </NavLink>
          </li>
          <li>
            <div className="checkbox-wrapper-54" title="Theme mode">
              <label className="switch">
                <input id="themeToggle" type="checkbox" checked={themeMode === 'dark'} onClick={() => applyTheme(themeMode === 'dark' ? 'light' : 'dark')} />
                <span className="slider"></span>
              </label>
            </div>
          </li>
        </ul>
        <button className="hamburger">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
      </nav>
    </header>
  );
}
