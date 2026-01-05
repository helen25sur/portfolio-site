import { useState } from "react";
import { ProjectCard } from "./ProjectCard.js";

export const ProjectItem = ({ proj }) => {
  const [isOpenCard, setIsOpenCard] = useState(false);

  const openCard = () => {
    console.log("Open project card for:", proj.name);
    setIsOpenCard(prevState => !prevState);
  }
  return (
    isOpenCard ? (
     <ProjectCard proj={proj} openCard={openCard} />
    ) : (
      <li className="portfolio-item" >
        <img className="portfolio-screen" src={proj.imgSmall} alt={"Screenshot of " + proj.name} loading="lazy" width={"591px"} height={"328px"} />
        <h3 className="portfolio-title" onClick={openCard}>{proj.name}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
        </h3>
        <p className="portfolio-descr">{
          proj.tech.map((tech, index) => (
            <span className="tech-item" key={index}>
              {tech}
            </span>
          ))
          }</p>
        <a className="portfolio-link-btn" href={proj.link} target="_blank" rel="noopener noreferrer">
            View this project <i className="fa-solid fa-up-right-from-square"></i>
          </a>
      </li>
    )
  )

};