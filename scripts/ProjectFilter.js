export const ProjectFilter = ({ technologies, activeTech, onSelect }) => {
  

  const chooseTech = (tech) => {
    onSelect(tech);
  }

  return (
    <div className="project-filter">
      <ul className="tech-filter-list">
        {technologies.map((tech, index) => (
          <li key={index} className="tech-filter-item">
            <button className={`tech-filter-btn ${activeTech === tech ? 'active-tech-btn' : ''}`} 
              onClick={() => chooseTech(tech)}>{tech}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}