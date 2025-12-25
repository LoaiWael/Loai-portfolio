import { useEffect, useState } from 'react';
import { useWork } from '../contexts/WorkContext';
import './WorkshopPage.css';
import WorkshopOverlay from '../components/WorkshopOverlay';
import type { category } from '../types';
import logoCircle from '../assets/imgs/circle.webp';
import logoLine from '../assets/imgs/line.webp';
import background from '../assets/imgs/background.webp';

function workshop_openSource_hover() {
  const openSourceLi = document.querySelector("#open-source") as HTMLElement;
  const websitesLi = document.querySelector("#websites") as HTMLElement;

  if (!openSourceLi || !websitesLi) return () => { };

  const onEnter = () => {
    websitesLi.style.top = "calc(var(--top) - 2.5%)";
    websitesLi.style.right = "calc((var(--top) / 16 + var(--right)) + 2.5%)";
  };

  const onLeave = () => {
    websitesLi.style.top = "";
    websitesLi.style.right = "";
  };

  openSourceLi.addEventListener("mouseenter", onEnter);
  openSourceLi.addEventListener("mouseleave", onLeave);

  return () => {
    openSourceLi.removeEventListener("mouseenter", onEnter);
    openSourceLi.removeEventListener("mouseleave", onLeave);
  };
}

function workshop_uiux_hover() {
  const uiux = document.querySelector("#ui-ux") as HTMLElement;
  const openSourceLi = document.querySelector("#open-source") as HTMLElement;
  const websitesLi = document.querySelector("#websites") as HTMLElement;

  if (!uiux || !openSourceLi || !websitesLi) return () => { };

  const onEnter = () => {
    openSourceLi.style.top = "calc(var(--top) - 2.5%)";
    openSourceLi.style.right = "calc((var(--top) / 16 + var(--right)) - 1%)";
    websitesLi.style.top = "calc(var(--top) - 2.5%)";
    websitesLi.style.right = "calc((var(--top) / 16 + var(--right)) + 2.5%)";
  };

  const onLeave = () => {
    openSourceLi.style.top = "";
    openSourceLi.style.right = "";
    websitesLi.style.top = "";
    websitesLi.style.right = "";
  };

  uiux.addEventListener("mouseenter", onEnter);
  uiux.addEventListener("mouseleave", onLeave);

  return () => {
    uiux.removeEventListener("mouseenter", onEnter);
    uiux.removeEventListener("mouseleave", onLeave);
  };
}

function workshop_3d_hover() {
  const modeling = document.querySelector("#modeling") as HTMLElement;
  const uiux = document.querySelector("#ui-ux") as HTMLElement;
  const openSourceLi = document.querySelector("#open-source") as HTMLElement;
  const websitesLi = document.querySelector("#websites") as HTMLElement;

  if (!modeling || !uiux || !openSourceLi || !websitesLi) return () => { };

  const onEnter = () => {
    uiux.style.top = "calc(var(--top) - 2.5%)";
    uiux.style.right = "calc((var(--top) / 16 + var(--right)) - 4%)";
    openSourceLi.style.top = "calc(var(--top) - 2.5%)";
    openSourceLi.style.right = "calc((var(--top) / 16 + var(--right)) - 1%)";
    websitesLi.style.top = "calc(var(--top) - 2.5%)";
    websitesLi.style.right = "calc((var(--top) / 16 + var(--right)) + 2.5%)";
  };

  const onLeave = () => {
    uiux.style.top = "";
    uiux.style.right = "";
    openSourceLi.style.top = "";
    openSourceLi.style.right = "";
    websitesLi.style.top = "";
    websitesLi.style.right = "";
  };

  modeling.addEventListener("mouseenter", onEnter);
  modeling.addEventListener("mouseleave", onLeave);

  return () => {
    modeling.removeEventListener("mouseenter", onEnter);
    modeling.removeEventListener("mouseleave", onLeave);
  };
}

const WorkshopPage = () => {
  const [category, setCategory] = useState<category | null>(null);
  const { showOverlay, setShowOverlay, setProjectDetails } = useWork();

  useEffect(() => {
    const cleanupOpenSource = workshop_openSource_hover();
    const cleanupUiUx = workshop_uiux_hover();
    const cleanup3D = workshop_3d_hover();

    return () => {
      cleanupOpenSource();
      cleanupUiUx();
      cleanup3D();
      setShowOverlay(false);
      setProjectDetails(null);
    };
  }, []);

  const handleClick = (categ: category) => {
    setCategory(categ);
    setShowOverlay(true);
  }

  return (
    <>
      <title>Loai - Workshop</title>

      <main className='workshop'>
        <section className="workshop">
          <div className="top-introduction">
            <h1>MY WORKSHOP</h1>
            <span>All my work grouped in this page</span>
          </div>
          <div className="logo-area-realtive">
            <img fetchPriority="high" src={logoCircle} alt="circle" draggable="false" />
            <img fetchPriority="high" src={logoLine} alt="line" draggable="false" />
            <span className="loaiproject">羅艾项目</span>
          </div>
          <ul className="navigations">
            <li id="websites"><button onClick={() => handleClick('websites')}><svg
              xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
              className="bi bi-code-slash" viewBox="0 0 16 16">
              <path
                d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
            </svg></button><span>Websites.</span></li>
            <li id="open-source"><button onClick={() => handleClick('open-source')}><svg
              xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
              className="bi bi-globe2" viewBox="0 0 16 16">
              <path
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855q-.215.403-.395.872c.705.157 1.472.257 2.282.287zM4.249 3.539q.214-.577.481-1.078a7 7 0 0 1 .597-.933A7 7 0 0 0 3.051 3.05q.544.277 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9 9 0 0 1-1.565-.667A6.96 6.96 0 0 0 1.018 7.5zm1.4-2.741a12.3 12.3 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.3 12.3 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.6 13.6 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696q.18.469.395.872c.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a7 7 0 0 1-.598-.933 9 9 0 0 1-.481-1.079 8.4 8.4 0 0 0-1.198.49 7 7 0 0 0 2.276 1.522zm-1.383-2.964A13.4 13.4 0 0 1 3.508 8.5h-2.49a6.96 6.96 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667m6.728 2.964a7 7 0 0 0 2.275-1.521 8.4 8.4 0 0 0-1.197-.49 9 9 0 0 1-.481 1.078 7 7 0 0 1-.597.933M8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855q.216-.403.395-.872A12.6 12.6 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.96 6.96 0 0 0 14.982 8.5h-2.49a13.4 13.4 0 0 1-.437 3.008M14.982 7.5a6.96 6.96 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461q.266.502.482 1.078a8.4 8.4 0 0 0 1.196-.49 7 7 0 0 0-2.275-1.52c.218.283.418.597.597.932m-.488 1.343a8 8 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
            </svg></button><span>Open source.</span></li>
            <li id="ui-ux"><button onClick={() => handleClick('ui-ux')}><svg xmlns="http://www.w3.org/2000/svg"
              width="20" height="20" fill="currentColor" className="bi bi-palette-fill" viewBox="0 0 16 16">
              <path
                d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07M8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
            </svg></button><span>UI UX.</span></li>
            <li id="modeling"><button onClick={() => handleClick('3d-models')}><svg xmlns="http://www.w3.org/2000/svg"
              width="20" height="20" fill="currentColor" className="bi bi-box-fill" viewBox="0 0 16 16">
              <path fillRule="evenodd"
                d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z" />
            </svg></button><span>3D Models.</span></li>
          </ul>
          <span className="fact">Eyes contact with visuals<br />before reading the content.</span>
          <img fetchPriority="high" draggable="false" src={background}
            className="background background-rotate" alt="background" />
        </section>
        {showOverlay && <WorkshopOverlay category={category!} />}
        <hr className="white-fog" />
      </main>
    </>
  )
}

export default WorkshopPage