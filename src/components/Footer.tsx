import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="skeleton">
        <div className="top-footer">
          <span className="logo-footer">.Loa项目'</span>
          <div className="top-footer-first-column">
            <a target="_blank" href="#about-me" rel="noreferrer">
              About me
            </a>
            <br />
            <a target="_blank" href="#education" rel="noreferrer">
              Education
            </a>
            <br />
            <a target="_blank" href="#skills" rel="noreferrer">
              Skills
            </a>
          </div>
          <div className="top-footer-second-column">
            <a href="#experience">Experience</a>
            <br />
            <a href="#contacts">Contacts</a>
          </div>
          <div className="top-footer-third-column">
            <a href="./index.html" target="_self">
              Home
            </a>
            <br />
            <a href="#" target="_self">
              Timeline
            </a>
            <br />
            <a href="./My workshop.html" target="_self">
              My workshop
            </a>
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