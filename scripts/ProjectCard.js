import { useEffect, useRef } from 'react';

export const ProjectCard = ({ proj, openCard }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (dialog) {
      dialog.showModal();
    }

    document.body.classList.add('overflow-hidden');
    document.body.style.scrollMargin = 0;

    return () => {
      if (dialog) {
        dialog.close();
      }
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      openCard();
    }
  };

  return (
    <li className="portfolio-card open-card">
      <dialog ref={dialogRef}
        onClose={openCard}
        onClick={handleBackdropClick}
        className="portfolio-dialog">
          <div className="portfolio-image-block">
            <img className="portfolio-screen" src={proj.img} alt={"Screenshot of " + proj.name} loading="lazy" />
          </div>
        
        <div className="portfolio-card-content">
          <h3 className="portfolio-title portfolio-card-title">{proj.name}</h3>
          <p className="full-descr">{proj.description}</p>
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
          { proj.codeLink ?
          ( <a className="portfolio-link-btn" href={proj.codeLink} target="_blank" rel="noopener noreferrer">
            GitHub code <i className="fa-brands fa-square-github"></i>
          </a> ) : null }
          <button className="close-card-btn" onClick={openCard}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
          </button> 

        </div>
      </dialog>


    </li>
  )
}