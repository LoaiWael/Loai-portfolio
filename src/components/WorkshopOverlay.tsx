import { useEffect, useState, type CSSProperties } from "react"
import { chooseButton, generateMarkers } from "../utils/workshop";
import { useWork } from "../contexts/WorkContext";
import type { category, Itechnology, jsonData, technologyKeys } from "../types"

interface InumOfPhotos extends CSSProperties {
  '--num-photos': number
}

const Details = () => {
  const [technologies, setTechnologies] = useState<Record<technologyKeys, Itechnology> | null>(null);
  const { projectDetails, setProjectDetails, setShowOverlay, fetchData } = useWork();

  useEffect(() => {
    setTechnologies(fetchData('technologies') as any);

    const onClickAncor = (e: Event) => {
      e.preventDefault();

      const index = getComputedStyle(this!).getPropertyValue('--i').trim();
      const image = document.querySelectorAll('.photos li')[Number(index)] as HTMLLIElement;
      const container = document.querySelector('.photos');

      container?.scrollTo({
        left: image.offsetLeft,
      });
    }

    document.querySelectorAll('.markers a').forEach(marker => {
      marker.addEventListener('click', (e) => onClickAncor(e));
    });

    return () => {
      document.querySelectorAll('.markers a').forEach(marker => {
        marker.removeEventListener('click', onClickAncor)
      })
    }
  }, [])

  return (
    <div className="overlay-content-details">
      <div className="header">
        <button className="back-button" onClick={() => setProjectDetails(null)} title="Back"><span></span></button>
        <button className="close-button" onClick={() => setShowOverlay(false)}
          title="Close"><span></span><span></span></button>
      </div>
      <div className="scrolling-area">
        <section className="photos-area" style={{ "--num-photos": projectDetails?.numOfImages } as InumOfPhotos}>
          <ul className="photos">
            {projectDetails?.images.map(img => (<li key={crypto.randomUUID()}><img src={img} alt="" /></li>))}
          </ul>
          <ul className="markers">
            {generateMarkers(projectDetails!.numOfImages)}
          </ul>
        </section>
        <section className="doc">
          <h1>${projectDetails!.title}</h1>
          <small>${projectDetails!.creationDate}</small>
          <p className="details-info">${projectDetails!.doc}
          </p>
        </section>
        <section className="technologies">
          <h2>Technologies:</h2>
          <div className="details-info">
            {technologies ?
              projectDetails?.technologies.map(tech => (
                <div><span id={technologies[tech.name].id}><img src="${technologies[elem.name].icon}" alt="" />${technologies[tech.name].title}</span><small>${tech.techUsage}</small></div>
              )) :
              'Error, please try to refresh the page.'
            }

          </div>
        </section>
        <section className="contributors">
          <h2>Contributors:</h2>
          <div className="details-info">
            ${creators}
          </div>
        </section>
        <div className="figure-buttons">
          ${buttons}
        </div>
      </div>
    </div >
  )
}

const WorkshopOverlay = ({ category }: { category: category }) => {
  const { fetchData, works, setWorks, projectDetails, setProjectDetails, setShowOverlay } = useWork();

  useEffect(() => {
    let data: jsonData;
    switch (category) {
      case 'websites': data = 'websites'; break;
      case 'open-source': data = 'open-source'; break;
      case 'ui-ux': data = 'ui-ux'; break;
      case '3d-models': data = 'threeD'; break;
    }
    setWorks(fetchData(data) as any);
  }, [category])

  return (
    < div className="overlay" >
      <div className="overlay-content">
        <button className="close-button" onClick={() => setShowOverlay(false)} title="Close"><span></span><span></span></button>
        <h1>{works?.categoryName}</h1>
        <section>
          {works?.content.map(project =>
            <figure>
              <img loading="lazy" draggable="false" src="${work.photoPrev}" alt="${work.title}" />
              <div className="about-product">
                <figcaption>${project.title}</figcaption>
                <span>${project.quickDoc}</span>
              </div>
              <div className="figure-buttons">
                <a target="_blank" href={`${project.src[0]}`}>${chooseButton(category)}</a>
                <a className="secondary-button" onClick={() => setProjectDetails(project)}>Read more</a>
              </div>
            </figure>
          )}
        </section>
      </div>
      {projectDetails && <Details />}
    </div >
  )
}

export default WorkshopOverlay