import type { CSSProperties } from "react";
import "./HomePage.css";

interface carouselIndex extends CSSProperties {
  '--i': number
}

export default function Home() {
  return (
    <>
      <main>
        <div className="introduction-background"></div>
        <section className="introduction">
          <div className="about-me">
            <h1 className="name">Loai Wael Hassan</h1>
            <p className="info-under-name">Front-End developer (ReactJS)</p>
            <hr className="line" id="introduction-line" />
            <div className="contacts">
              <a
                href="https://www.linkedin.com/in/loai-wael-cs"
                id="linkedin"
                title="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://github.com/LoaiWael"
                id="github"
                title="GitHub"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://www.facebook.com/mirror.edge.165"
                id="facebook"
                title="FaceBook"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://x.com/LoaiWaell"
                id="x"
                title="X"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-twitter-x"></i>
              </a>
              <a
                href="https://www.instagram.com/l0ai_wael/"
                id="instagram"
                title="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
          <div className="photo-space">
            <img
              draggable="false"
              id="background"
              fetchPriority="high"
              src="src/assets/imgs/home/IMG20240725232931.webp"
              alt="Loai Wael Hassan"
            />
            <img
              draggable="false"
              id="me-in-img"
              fetchPriority="high"
              src="src/assets/imgs/home/Me.webp"
              alt="Loai"
            />
          </div>
        </section>
        <section className="cv-content">
          <div className="cv-content-box blur-scrolling" id="about-me">
            <h2 className="content-headline">
              <i className="bi bi-card-text"></i> About me
            </h2>
            <hr className="line" id="about-me-line" />
            <div className="content">
              <div className="content-after-headline">
                <p>
                  Since I was a child my parents taught me how to pleasure them
                  and how to be nice to them and other people. Let&apos;s say
                  that I have acquired a skill from them because when I grew up
                  I knew how to make a huge network with people 🤝. During my
                  first job at a supermarket, I used this skill perfectly to
                  gain the customers&apos; loyalty 🫶❤️. I have learned about UX
                  or CX from a community on the internet and since I have read
                  many documents about CX 📖, learned at my career how to design
                  UI to gain the best experience like colors and fonts and so
                  on, learned tools to design the experience and I&apos;m a
                  software Dev so I am continuously learning more tech to
                  Implement these experiences as I am trying to solve many
                  problems for the people by my tech 🤔. To summarize, all my
                  work is based on customer centricity, I am not developing for
                  fun. You can see my
                  <a className="brown-links" href="#skills">
                    skills
                  </a>
                  ,{" "}
                  <a className="brown-links" href="#experience">
                    experience
                  </a>
                  or you can just
                  <a className="brown-links" href="#contacts">
                    contact me
                  </a>
                  .
                </p>
              </div>
              <img
                src="src/assets/imgs/home/vecteezy_adventurous-3d-florist-boy-with-cactus-ideal-for-desert-or_22483610_resized.webp"
                alt="Big MAN"
                draggable="false"
                loading="lazy"
                id="about-me-img"
              />
            </div>
          </div>
          <div className="cv-content-box blur-scrolling" id="education">
            <h2 className="content-headline">
              <i className="bi bi-mortarboard-fill"></i> Education
            </h2>
            <hr className="line" id="education-line" />
            <div className="content">
              <div className="content-after-headline">
                <ul className="content-list">
                  <li>
                    <details>
                      <summary>
                        Studied at Mansoura langauge school. (MLS)
                      </summary>
                      <hr />
                      <small>
                        Studied at the school for 14 years and graduated with
                        82.9% at my last year.
                        <br />
                        (14/7/2023)
                      </small>
                    </details>
                  </li>
                  <li>
                    Studies at faculty of computer and information science
                    Mansoura Univiristy.
                  </li>
                  <li>
                    <details>
                      <summary>
                        Studied Front-End web development / User experience
                        design at Americain counsil
                      </summary>
                      <hr />
                      <small>
                        <ul className="list-spaces">
                          <li>System design</li>
                          <li>Analysis requird from client</li>
                          <li>HTML5</li>
                          <li>CSS3</li>
                          <li>Bootstrap</li>
                          <li>JQuery</li>
                          <li>JavaScript</li>
                        </ul>
                      </small>
                    </details>
                  </li>
                  <li>
                    Studied Customer Experience (CX) for Business Success at
                    HP-life.
                  </li>
                </ul>
                <button
                  id="certificate-button"
                  aria-label="Show certificates"
                  title="Show certificates"
                >
                  Certificates
                </button>
              </div>
              <img
                src="src/assets/imgs/home/3d-graduation-of-university-hat-cap-or-diploma-graduation-hat-3d-icon-free-png (1).webp"
                alt="graduation cap"
                draggable="false"
                loading="lazy"
              />
            </div>
          </div>
          <div className="cv-content-box" id="certificates">
            <button
              id="close-certificates"
              aria-label="Close certificates"
              title="Close"
            >
              <span></span>
              <span></span>
            </button>
            <h2 id="certificates-header" className="content-headline">
              <i className="bi bi-award"></i> Certificates{" "}
              <i className="bi bi-award"></i>
            </h2>
            <div className="certificates-container">
              <ul className="certificates">
                <li id="certificate1">
                  <img
                    src="src/assets/imgs/home/certificate CX.webp"
                    alt="CX certificate"
                  />
                </li>
                <li id="certificate2">
                  <img
                    src="src/assets/imgs/home/american-council-frontend.webp"
                    alt="american council front-end certificate"
                  />
                </li>
              </ul>
              <div className="certificates-markers">
                <a
                  href="#certificate1"
                  style={{ "--i": 1 } as carouselIndex}
                  title="HP-Life"
                ></a>
                <a
                  href="#certificate2"
                  style={{ "--i": 2 } as carouselIndex}
                  title="American Council"
                ></a>
              </div>
            </div>
          </div>
          <div className="cv-content-box blur-scrolling" id="skills">
            <h2 className="content-headline">
              <i className="bi bi-gem"></i> Skills
            </h2>
            <hr className="line" id="skills-line" />
            <div className="content">
              <div className="content-after-headline">
                <div className="skills-progress">
                  <details>
                    <summary id="front-end-details">
                      Front-End <progress max="100" value="80"></progress>
                    </summary>
                    <hr />
                    <small>
                      Started front-end development career since 2024
                      <dl className="skills-list">
                        <div className="all-frontend-skils">
                          <dt>TECH:</dt>
                          <dd id="html-tech">
                            <img
                              src="./public/tech/html-logo-png.webp"
                              alt=""
                            />{" "}
                            HTML5
                          </dd>
                          <dd id="css-tech">
                            <img src="./public/tech/css.webp" alt="" /> CSS3
                          </dd>
                          <dd id="js-tech">
                            <img src="./public/tech/javascript.webp" alt="" />{" "}
                            JavaScript
                          </dd>
                          <dd id="ts-tech">
                            <img src="./public/tech/typescript.svg" alt="" />{" "}
                            TypeScript
                          </dd>
                          <dd id="jasmine-tech">
                            <img src="./public/tech/Jasmine.webp" alt="" />{" "}
                            Jasmine
                          </dd>
                          <dd id="scroll-driven-animation">
                            <a
                              href="https://scroll-driven-animations.style/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 960 960"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  d="M117.414 113.459l.22 438.763M67.44 157.873c33.292-81.812 66.625-82.275 99.999-1.389m.201 349.094c-33.293 81.812-66.626 82.275-99.999 1.389"
                                  fill="none"
                                  stroke="#000"
                                  strokeWidth="37.5"
                                />
                                <path
                                  d="M770.599 215.902C736 90.774 614.765 47.812 489.636 82.411 364.508 117.01 282.565 216.152 317.164 341.28l114.209 413.042c34.599 125.129 152.546 156.198 277.674 121.599 125.129-34.599 210.36-121.848 175.761-246.977L770.599 215.902z"
                                  fill="#fff"
                                  stroke="#000"
                                  strokeWidth="50.45"
                                />
                                <path
                                  d="M536.653 252.449l31.344 113.359"
                                  fill="none"
                                  stroke="#000"
                                  strokeWidth="58.81"
                                />
                              </svg>{" "}
                              Scroll-driven Animations
                            </a>
                          </dd>
                        </div>
                        <div className="all-frontend-tools">
                          <dt>TOOLS:</dt>
                          <dd id="cursor-tech">
                            <img src="./public/tech/cursor.webp" alt="" />{" "}
                            Cursor
                          </dd>
                          <dd id="github-tech">
                            <i className="bi bi-github"></i> GitHub
                          </dd>
                          <dd id="git-tech">
                            <img src="./public/tech/git.webp" alt="" /> Git
                          </dd>
                        </div>
                      </dl>
                    </small>
                  </details>
                  <br />
                  <details>
                    <summary id="ui-ux-details">
                      UI/UX <progress max="100" value="75"></progress>
                    </summary>
                    <hr />
                    <small>
                      Learned modern color theories and some basic UI layouts
                      and how to choose between them
                      <dl className="skills-list">
                        <div>
                          <dt>TOOLS:</dt>
                          <dd id="figma-tech">
                            <img src="./public/tech/Figma-Logo.webp" alt="" />{" "}
                            Figma
                          </dd>
                          <dd id="stitch-tech">
                            <img src="./public/tech/stitch.webp" alt="" />{" "}
                            Google Stitch
                          </dd>
                          <dd id="adobe-color-tech">
                            <img
                              src="./public/tech/adobe-color-icon.webp"
                              alt=""
                            />{" "}
                            Adobe Color
                          </dd>
                        </div>
                      </dl>
                    </small>
                  </details>
                  <br />
                  <details>
                    <summary id="3d-modeling">
                      3D Modeling <progress max="100" value="40"></progress>
                    </summary>
                    <hr />
                    <small>
                      Using C4D since i was chiled in 2019 when covid-19 apeared
                      but i have only learned how to create a model with UV mesh
                      <dl className="skills-list">
                        <div>
                          <dt>TOOLS:</dt>
                          <dd id="cinema-tech">
                            <img src="./public/tech/c4d-logo.webp" alt="" />{" "}
                            Cinema 4D
                          </dd>
                        </div>
                      </dl>
                    </small>
                  </details>
                </div>
              </div>
              <img
                src="src/assets/imgs/home/vecteezy_a-cartoon-character-with-sunglasses-and-a-skateboard_23624660.webp"
                alt="Skateboard boi"
                draggable="false"
                loading="lazy"
              />
            </div>
          </div>
          <div className="cv-content-box blur-scrolling" id="experience">
            <h2 className="content-headline">
              <i className="bi bi-lightbulb-fill"></i> Experience
            </h2>
            <hr className="line" id="experience-line" />
            <div className="content">
              <div className="content-after-headline experience-content-flex">
                <article className="front-end">
                  <h3>Front-End</h3>
                  <small>Started since: 2024</small>
                  <dl>
                    <dt>Freelance:</dt>
                    <dd>Implemented Huge projects. Ex.( Allam coffee app )</dd>
                    <br />
                    <dt>Intern:</dt>
                    <dd className="depi-internship">
                      <div className="intern-headline">
                        <h4>DEPI</h4>
                        <small className="experience-date">
                          ( 27/6/2025 - 5/12/2025 )
                        </small>
                      </div>
                      <img src="src/assets/imgs/home/depi.webp" alt="DEPI" />
                      <p>
                        took an internship at{" "}
                        <a
                          className="brown-links"
                          href="https://depi.gov.eg/content/home"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Digital Egypt Pioneers
                        </a>{" "}
                        as a React developer for 6 months.
                      </p>
                    </dd>
                    <br />
                    <dt>Remote / On-site:</dt>
                    <dd>Empty.</dd>
                  </dl>
                </article>
                <article className="ui-ux">
                  <h3>Ui/Ux</h3>
                  <small>Started since: 2024</small>
                  <dl>
                    <dt>Freelance:</dt>
                    <dd>
                      Designed alot of big projects. Ex.( Music platform /Allam
                      Coffee app )
                    </dd>
                    <dd>
                      Visit{" "}
                      <a className="brown-links" href="./My workshop.html">
                        My Workshop
                      </a>{" "}
                      for more projects.
                    </dd>
                  </dl>
                </article>
                <article className="model-3d">
                  <h3>3D modeling / product design</h3>
                  <small>Started since: 2019</small>
                  <dl>
                    <dt>Freelance:</dt>
                    <dd>
                      Designed alot of projects. Ex.( Iphone / Smart watch )
                    </dd>
                    <dd>
                      Visit{" "}
                      <a className="brown-links" href="./My workshop.html">
                        My Workshop
                      </a>{" "}
                      for more projects.
                    </dd>
                  </dl>
                </article>
              </div>
              <img
                src="src/assets/imgs/home/vecteezy_a-cartoon-character-with-sunglasses-and-a-skateboard_23624660_resized (1).webp"
                alt="Very very big MAN"
                draggable="false"
                loading="lazy"
              />
            </div>
          </div>
          <div className="cv-content-box blur-scrolling" id="contacts">
            <h2 className="content-headline">
              <i className="bi bi-person-lines-fill"></i> Contacts
            </h2>
            <hr className="line" id="contacts-line" />
            <div className="content">
              <div className="content-after-headline">
                <ul className="content-list" id="contacts-list">
                  <li>
                    <a
                      href="mailto:princeloai70@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-envelope-paper-fill"></i>
                      Email
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/loai-wael-374a93299/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-linkedin"></i> LinkedIn
                    </a>
                  </li>
                  <li id="whatsapp" className="whatsapp">
                    <i className="bi bi-whatsapp"></i> Whatsapp{" "}
                    <span>: +20 1027 9727 95</span>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/mirror.edge.165"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-facebook"></i>
                      FaceBook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/l.0.a.i/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-instagram"></i>
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
              <img
                src="src/assets/imgs/home/vecteezy_happy-3d-student-boy-with-books-on-white-background-png_22484651_resized.webp"
                alt="Contacts picture"
                draggable="false"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main >
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
    </>
  );
}
