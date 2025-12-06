import { NavLink } from "react-router";
import "./NavBar.css";

export default function NavBar() {
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
                <input id="themeToggle" type="checkbox" />
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
