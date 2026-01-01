import { useState } from "react";

import { ProjectItem } from "./ProjectItem";
import { ProjectFilter } from "./ProjectFilter.js";

export const ProjectList = ({ projects, technologies }) => {
  const [selectedTech, setSelectedTech] = useState('All');

  const filteredProjects = projects.filter((proj) => {
    if (selectedTech === "All") return true;
    
    return proj.tech.includes(selectedTech);
  });

  return (
    <section className="portfolio-section">
      <div className="portfolio-wrapper">
        <h4 className="section-subtitle emphasise-txt">Portfolio</h4>
        <h2 className="section-title">My projects</h2>
        <ProjectFilter technologies={technologies} activeTech={selectedTech} onSelect={setSelectedTech} />
        <ul className="portfolio-list">
          {filteredProjects.map((proj) => (
          <ProjectItem key={proj.id} proj={proj} />
        ))} 
        </ul>
        {filteredProjects.length === 0 && (
          <p>No projects found for {selectedTech}</p>
        )}
      </div>
    </section>
  );
};