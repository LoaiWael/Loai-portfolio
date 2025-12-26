import type { category, Iwork, carouselIndex } from "../types";

//main page
export function workshop_openSource_hover() {
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

export function workshop_uiux_hover() {
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

export function workshop_3d_hover() {
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

//overlay
export const chooseButton = (categ: category) => {
  let srcButton;
  switch (categ) {
    case '3d-models': srcButton = <>View post <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" /> <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" /></svg></>;
      break;
    case 'ui-ux': srcButton = <>Behance <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" /> <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" /></svg></>;
      break;
    case 'websites': srcButton = <>Live view <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" /> <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" /></svg></>;
      break;
    case 'open-source': srcButton = <><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-folder-fill" viewBox="0 0 16 16"><path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3m-8.322.12q.322-.119.684-.12h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981z" /></svg> Forked repo</>;
      break;
  }
  return srcButton;
}

export const generateMarkers = (numOfImages: number) => {
  const imagesMarker = [];
  for (let i = 0; i < numOfImages; i++) {
    imagesMarker.push(<li key={i}><a href="#" style={{ "--i": i } as carouselIndex}></a></li>);
  }
  return imagesMarker;
}

export const detailsSrcButtons = (categ: category, project: Iwork) => {
  let buttons;
  if (categ === 'websites' || categ === 'open-source') {
    buttons = <>
      <a target="_blank" href={project.src[0]}>{chooseButton(categ)}</a>
      <a target="_blank" href={project.src[1]}>Main repo <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-folder2-open" viewBox="0 0 16 16"><path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7z" /></svg>
      </a>
    </>;
  }
  else {
    buttons = <a target="_blank" href={project.src[0]}>{chooseButton(categ)}</a>;
  }
  return buttons
}

export const imgContentHover = (photos: HTMLImageElement[]) => {
  const markers: HTMLElement | null = document.querySelector('ul.markers');
  if (markers) {
    const onMouseEnter = () => {
      markers.style.opacity = '0.25';
    }
    const onMouseLeave = () => {
      markers.style.opacity = '1';
    }

    photos.forEach(photo => {
      photo.addEventListener('mouseenter', () => {
        onMouseEnter();
      });
      photo.addEventListener('mouseleave', () => {
        onMouseLeave();
      });
    })

    return () => {
      photos.forEach(photo => {
        photo.removeEventListener('mouseenter', onMouseEnter);
        photo.removeEventListener('mouseleave', onMouseLeave);
      })
    }
  }
  return () => { }
}