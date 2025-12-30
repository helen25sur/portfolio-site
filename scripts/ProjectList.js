import { ProjectItem } from "./ProjectItem";

export const ProjectList = ({ projects }) => {
  return (
    <section className="portfolio-section">
      <div className="portfolio-wrapper">
        <h4 className="section-subtitle emphasise-txt">Portfolio</h4>
        <h2 className="section-title">Watch my projects</h2>
        <ul className="portfolio-list">
          {projects.map((proj) => ( 
            <ProjectItem key={proj.id} proj={proj} />
          ))}
        </ul>
      </div>
    </section>
  );
};