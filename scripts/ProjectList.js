export const ProjectList = ({ projects }) => {
  return (
    <section className="portfolio-section">
      <div className="portfolio-wrapper">
        <h4 className="section-subtitle emphasise-txt">Portfolio</h4>
        <h2 className="section-title">Watch my projects</h2>
        <ul className="portfolio-list">
          {projects.map((proj) => (
            <li className="portfolio-item" key={proj.id}>
              <img className="portfolio-screen" src={proj.img}
                alt={"Screenshot of " + proj.name} loading="lazy" />
              <h3 className="portfolio-title">{proj.name}</h3>
              <p className="portfolio-descr">{proj.tech}</p>
              <a className="portfolio-link-btn" href={proj.link}
                title={"More about " + proj.name} target="_blank" rel="noopener noreferrer">View
                this project <i className="fa-solid fa-up-right-from-square"></i></a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};