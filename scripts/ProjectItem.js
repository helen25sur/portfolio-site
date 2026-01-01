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
        <img className="portfolio-screen" src={proj.img} alt={"Screenshot of " + proj.name} loading="lazy" />
        <h3 className="portfolio-title" onClick={openCard}>{proj.name}
          <i className="fa-solid fa-arrow-right"></i>
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