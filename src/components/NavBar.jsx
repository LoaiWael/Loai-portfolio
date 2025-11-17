import "./NavBar.css";

export default function NavBar() {
  return (
    <header>
      <nav>
        <span className="logo-name">.Loa项目'</span>
        <ul className="nav-links">
          <li>
            <a
              target="_self"
              className="nav-buttons"
              href="./index.html"
              id="home"
            >
              Home
            </a>
          </li>
          <li>
            <a target="_self" className="nav-buttons" href="#" id="timeline">
              Timeline
            </a>
          </li>
          <li>
            <a
              className="nav-buttons"
              id="my-workshop"
              target="_self"
              href="./My workshop.html"
            >
              My workshop
            </a>
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
