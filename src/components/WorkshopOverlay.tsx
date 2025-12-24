import { useEffect, useState, type CSSProperties } from "react"
import { chooseButton, detailsSrcButtons, generateMarkers } from "../utils/workshop";
import fetchData from "../utils/fetchData";
import { useWork } from "../contexts/WorkContext";
import type { category, Icontributor, Itechnology, jsonData, technologyKeys, contributor, Iwork } from "../types"
import './WorkshopOverlay.css'

interface InumOfPhotos extends CSSProperties {
  '--num-photos': number
}

const Details = ({ category }: { category: category }) => {
  const [technologies, setTechnologies] = useState<Record<technologyKeys, Itechnology> | null>(null);
  const [contributors, setContributors] = useState<Record<contributor, Icontributor> | null>(null);
  const { projectDetails, setProjectDetails, setShowOverlay } = useWork();

  useEffect(() => {
    const loadData = async () => {
      const techData = await fetchData('technologies');
      const contribData = await fetchData('contributors');
      setTechnologies(techData as Record<technologyKeys, Itechnology>);
      setContributors(contribData as Record<contributor, Icontributor>);
    };
    loadData();

    function onClickAncor(e: MouseEvent) {
      e.preventDefault();

      const target = e.currentTarget as HTMLAnchorElement;
      const index = getComputedStyle(target).getPropertyValue('--i').trim();
      const image = document.querySelectorAll('.photos li')[Number(index)] as HTMLLIElement;
      const container = document.querySelector('.photos');

      container?.scrollTo({
        left: image.offsetLeft,
      });
    }

    document.querySelectorAll('.markers a').forEach(marker => {
      marker.addEventListener('click', (e) => onClickAncor(e as MouseEvent));
    });


    return () => {
      document.querySelectorAll('.markers a').forEach(marker => {
        (marker as HTMLAnchorElement).removeEventListener('click', onClickAncor)
      })
    }
  }, [projectDetails]);

  const projectTechnologies = projectDetails?.technologies.map(tech => {
    if (technologies) {
      return {
        id: technologies[tech.name].id,
        icon: technologies[tech.name].icon,
        title: technologies[tech.name].title,
        techUsage: tech.techUsage
      }
    }
  });

  const projectContributors = projectDetails?.contributors.map(person => {
    if (contributors) {
      return {
        id: crypto.randomUUID(),
        name: contributors[person].name,
        photo: contributors[person].photo,
        position: contributors[person].position,
        communication: contributors[person].communication
      }
    }
  });

  return (
    <div className="overlay-content-details">
      <div className="header">
        <button className="back-button" onClick={() => setProjectDetails(null)} title="Back"><span></span></button>
        <button className="close-button" onClick={() => { setShowOverlay(false); setProjectDetails(null) }}
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
          <h1>{projectDetails!.title}</h1>
          <small>{projectDetails!.creationDate}</small>
          <p className="details-info">{projectDetails!.doc}
          </p>
        </section>
        <section className="technologies">
          <h2>Technologies:</h2>
          <div className="details-info">
            {projectTechnologies?.map(tech => (
              <div key={tech?.id}><span id={tech?.id}><img src={tech?.icon} alt="" />{tech?.title}</span><small>{tech?.techUsage}</small></div>
            ))}
          </div>
        </section>
        <section className="contributors">
          <h2>Contributors:</h2>
          <div className="details-info">
            {projectContributors?.map(person => (
              <a target="_blank"
                href={person?.communication} key={person?.id}>
                <img src={person?.photo} alt={person?.name} draggable="false" loading="lazy" />
                <div className="contributor-info">
                  <span className="contributor-info-name">{person?.name}</span>
                  <small className="contributor-info-position">{person?.position}</small>
                </div>
              </a>
            ))}
          </div>
        </section>
        <div className="figure-buttons">
          {detailsSrcButtons(category, projectDetails as Iwork)}
        </div>
      </div>
    </div >
  )
}

const WorkshopOverlay = ({ category }: { category: category }) => {
  const { projects, setProjects, projectDetails, setProjectDetails, setShowOverlay } = useWork();

  useEffect(() => {
    const getData = async () => {
      let data: jsonData;
      switch (category) {
        case 'websites': data = 'websites'; break;
        case 'open-source': data = 'open-source'; break;
        case 'ui-ux': data = 'ui-ux'; break;
        case '3d-models': data = 'threeD'; break;
      }
      setProjects(await fetchData(data));

    }
    getData();
  }, [category, setProjects])

  return (
    < div className="overlay" >
      <div className="overlay-content">
        <button className="close-button" onClick={() => setShowOverlay(false)} title="Close"><span></span><span></span></button>
        <h1>{projects ? projects.categoryName : ''}</h1>
        <section>
          {projects?.content ? projects.content.map(project =>
            <figure key={crypto.randomUUID()}>
              <img loading="lazy" draggable="false" src={project.photoPrev} alt={project.title} />
              <div className="about-product">
                <figcaption>{project.title}</figcaption>
                <span>{project.quickDoc}</span>
              </div>
              <div className="figure-buttons">
                <a target="_blank" href={project.src[0]}>{chooseButton(category)}</a>
                <a className="secondary-button" onClick={() => setProjectDetails(project)}>Read more</a>
              </div>
            </figure>
          ) :
            ''
          }
        </section>
      </div>
      {projectDetails && <Details category={category} />}
    </div >
  )
}

export default WorkshopOverlay