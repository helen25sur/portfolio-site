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
          <p className="portfolio-descr">{proj.tech}</p>
          <a className="portfolio-link-btn" href={proj.link} target="_blank" rel="noopener noreferrer">
            View this project <i className="fa-solid fa-up-right-from-square"></i>
          </a>
          <button className="close-card-btn" onClick={openCard}><i className="fa-solid fa-x"></i></button>

        </div>
      </dialog>


    </li>
  )
}