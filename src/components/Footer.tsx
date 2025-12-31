import { Link } from "react-router-dom"
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="skeleton">
        <div className="top-footer">
          <span className="logo-footer">.Loa项目'</span>
          <div className="top-footer-first-column">
            <a href="#about-me" rel="noreferrer">
              About me
            </a>
            <br />
            <a href="#education" rel="noreferrer">
              Education
            </a>
            <br />
            <a href="#skills" rel="noreferrer">
              Skills
            </a>
          </div>
          <div className="top-footer-second-column">
            <a href="#experience">Experience</a>
            <br />
            <a href="#contacts">Contacts</a>
          </div>
          <div className="top-footer-third-column">
            <Link to="./" target="_self">
              Home
            </Link>
            <br />
            <a href="#" target="_self">
              Timeline
            </a>
            <br />
            <Link to="./workshop" target="_self">
              My workshop
            </Link>
          </div>
        </div>
        <hr />
        <div className="bottom-footer">
          <div className="links">
            <a
              title="FaceBook"
              target="_blank"
              href="https://www.facebook.com/mirror.edge.165"
              rel="noreferrer"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              title="LinkedIn"
              target="_blank"
              href="https://www.linkedin.com/in/loai-wael-cs"
              rel="noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              title="GitHub"
              target="_blank"
              href="https://github.com/LoaiWael"
              rel="noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>
          </div>
          <p>&copy;CopyRight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer