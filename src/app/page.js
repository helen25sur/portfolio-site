import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import "./globals.css";
import "./mobile.css";
import "./page.css";
import RoundAvatar from "../assets/images/surilova-round.png";
import Avatar from "../assets/images/surilova.png";
import CalendarApp from "../assets/images/projects/calendar-app.png";
import CandeleafSite from "../assets/images/projects/candeleaf-site.png";
import CoursesApp from "../assets/images/projects/courses-app.png";
import GswaySite from "../assets/images/projects/gsways-site.png";
import HofmannSite from "../assets/images/projects/hofmann-site.png";
import LakehouseSite from "../assets/images/projects/lakehouse-site.png";
import MangatagalloSite from "../assets/images/projects/mangatagallo-site.png";
import OnlinezooSite from "../assets/images/projects/onlinezoo-site.png";
import StarDBApp from "../assets/images/projects/stardb-app.png";
import WeatherApp from "../assets/images/projects/weather-app.png";
import ContactImg from "../assets/images/contact-img.avif";


export default function Home() {
  return (
    <>
      <header className="main_header">
        <div className="header_wrapper flex">
          <div className="logo_wrapper">
            <Link href={'/'} title="Homepage" className="logo_link flex">
              <Image width="64" height="64" className="header_logo_round" src={RoundAvatar} alt="round avatar" />
              <h3 className="logo_title">Surilova</h3>
            </Link>
          </div>
          <nav className="main_navigation flex">
            <button id="mob-menu-btn" className="mob_burger btn not_animated">
              <span className="mob_burger_span"></span>
              <span className="mob_burger_span"></span>
              <span className="mob_burger_span"></span>
            </button>
            {/* <ul className="nav-list flex">
          <li className="nav-item"><a href="/" title="Homepage" className="nav-link active">Homepage</a></li>
          <li className="nav-item"><a href="/pages/about.html" title="About Olena" className="nav-link">About Me</a></li>
          <li className="nav-item"><a href="/pages/portfolio.html" title="Olena's Portfolio" className="nav-link">Portfolio</a>
          </li>
          <li className="nav-item"><a href="/pages/contacts.html" title="Contact Olena" className="nav-link">Contacts</a></li>
        </ul> */}
          </nav>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <hr className="section-separator" />

          <section className="about-section flex">
            <div className="about-wrapper">
              <header className="about-header">
                <h4 className="section-subtitle">Welcome to my world</h4>
                <h1 className="section-title">Hello, I&apos;m <span className="emphasise-txt">Olena Surilova</span></h1>
                <h2 className="about__job-title ">
                  a Web-Developer &<br /> Coder.
                </h2>
                <p className="about-descr">I am eager to further develop my skills in a collaborative environment with
                  like-minded individuals who
                  share my passion for web development.</p>
              </header>
              <div className="social-links">
                <h4 className="social-caption">contact me</h4>
                <ul className="social-list flex">
                  <li className="social-item"><a href="https://github.com/helen25sur" title="GitHub Profile" target="_blank"
                    rel="noopener noreferrer" className="social-link"><FontAwesomeIcon icon={faGithub} width={16} /></a></li>
                  <li className="social-item"><a href="https://www.linkedin.com/in/olena-surilova-8aa66b122/"
                    title="LinkedIn Profile" target="_blank" rel="noopener noreferrer" className="social-link"><FontAwesomeIcon
                      icon={faLinkedin} width={16} /></a></li>
                  <li className="social-item"><a href="https://www.instagram.com/elena_sur26/" title="Instagram Profile"
                    target="_blank" rel="noopener noreferrer" className="social-link"><FontAwesomeIcon icon={faInstagram} width={16} /></a></li>
                </ul>
              </div>

            </div>
            <div className="about-photo-wrapper">
              <Image className="my-photo" src={Avatar} alt="Olena Surilova" />
            </div>
          </section>

          <hr className="section-separator" />

          <section className="features-section">
            <div className="features-wrapper">
              <h4 className="section-subtitle emphasise-txt">Features</h4>
              <h2 className="section-title">What I Can Do</h2>

              <ul className="features-list">
                <li className="features-item">
                  <p className="features-icon"><i className="fa-solid fa-code"></i></p>
                  <h3 className="features-title">Single Page Applications (SPA)</h3>
                  <p className="features-descr">An SPA (Single-page application) is a web app implementation that loads only a
                    single web document, and then updates the body content of that single document via JavaScript APIs such
                    as XMLHttpRequest and Fetch when different content is to be shown.</p>
                </li>
                <li className="features-item">
                  <p className="features-icon"><i className="fa-solid fa-link"></i></p>
                  <h3 className="features-title">Multi-pages sites</h3>
                  <p className="features-descr">As the name suggests, a multi-page application is an app that has more than one
                    page with static information(text, images, etc.) and links to the other pages with the same
                    content—every change requests rendering a new page from the server in the browser.</p>
                </li>
                <li className="features-item">
                  <p className="features-icon"><i className="fa-solid fa-desktop"></i></p>
                  <h3 className="features-title">Landing-sites</h3>
                  <p className="features-descr">A landing page aims to capture information from contacts in exchange for
                    something of value, such as a retail offer code or business-to-business (B2B) insights in the form of a
                    white paper.</p>
                </li>
              </ul>
            </div>
          </section>

          <hr className="section-separator" />

          <section className="portfolio-section">
            <div className="portfolio-wrapper">
              <h4 className="section-subtitle emphasise-txt">Portfolio</h4>
              <h2 className="section-title">Watch my projects</h2>

              <ul className="portfolio-list">
                <li className="portfolio-item">
                  <Image className="portfolio-screen" src={WeatherApp}
                    alt="Screenshot of Weather app" />
                  <h3 className="portfolio-title">Weather App</h3>
                  <p className="portfolio-descr">Built with HTML, CSS and JavaScript</p>
                  <a className="portfolio-link-btn" href="https://guileless-pastelito-470cc1.netlify.app/"
                    title="More about Weather App" target="_blank">View
                    this project <i className="fa-solid fa-up-right-from-square"></i></a>
                </li>
                <li className="portfolio-item">
                  <Image className="portfolio-screen" src={CalendarApp}
                    alt="Screenshot of Calendar App" />
                  <h3 className="portfolio-title">Calendar App</h3>
                  <p className="portfolio-descr">Built with HTML, CSS and JavaScript</p>
                  <a className="portfolio-link-btn" href="https://helen25sur.github.io/calendar-component/"
                    title="More about Calendar App" target="_blank">View
                    this project <i className="fa-solid fa-up-right-from-square"></i></a>
                </li>
                <li className="portfolio-item">
                  <Image className="portfolio-screen" src={GswaySite}
                    alt="Screenshot of GS Ways Multi-Pages Site" />
                  <h3 className="portfolio-title">GS Ways Multi-Pages Site</h3>
                  <p className="portfolio-descr">Built with HTML, CSS and JavaScript</p>
                  <a className="portfolio-link-btn" href="https://gsways.com/eng/" title="More about GS Ways Multi-Pages Site"
                    target="_blank">View
                    this project <i className="fa-solid fa-up-right-from-square"></i></a>
                </li>
                <li className="portfolio-item">
                  <Image className="portfolio-screen" src={CoursesApp}
                    alt="Screenshot of SPA Courses App" />
                  <h3 className="portfolio-title">SPA Courses App</h3>
                  <p className="portfolio-descr">Built with HTML, CSS and Vue.js</p>
                  <a className="portfolio-link-btn" href="https://helen25sur.github.io/tech-task-genesis-frontend-school/"
                    title="More about Single Page Application Courses List" target="_blank">View
                    this project <i className="fa-solid fa-up-right-from-square"></i></a>
                </li>
                <li className="portfolio-item">
                  <Image className="portfolio-screen" src={StarDBApp}
                    alt="Screenshot of SPA Star Wars DB" />
                  <h3 className="portfolio-title">SPA Star Wars DB</h3>
                  <p className="portfolio-descr">Built with HTML, CSS and React.js</p>
                  <a className="portfolio-link-btn" href="https://helen25sur.github.io/star-db/" title="More about Star Wars DB"
                    target="_blank">View
                    this project <i className="fa-solid fa-up-right-from-square"></i></a>
                </li>
                <li className="portfolio-item">
                  <Image className="portfolio-screen" src={CandeleafSite}
                    alt="Screenshot of Online Shop &apos;Candeleaf'" />
                  <h3 className="portfolio-title">Online Shop &apos;Candeleaf&apos;</h3>
                  <p className="portfolio-descr">Built with HTML, CSS and Node.js (in progress)</p>
                  <a className="portfolio-link-btn" href="https://candleaf2.onrender.com/"
                    title="More about Online Shop 'Candeleaf'" target="_blank">View
                    this project <i className="fa-solid fa-up-right-from-square"></i></a>
                </li>
                <li className="portfolio-item">
                  <Image className="portfolio-screen" src={OnlinezooSite}
                    alt="Screenshot of Multi-Pages Site 'Online Zoo'" />
                  <h3 className="portfolio-title">Multi-Pages Site &apos;Online Zoo&apos;</h3>
                  <p className="portfolio-descr">Built with HTML, CSS</p>
                  <a className="portfolio-link-btn"
                    href="https://rolling-scopes-school.github.io/helen25sur-JSFE2021Q1/online-zoo/pages/main/main.html"
                    title="More about Multi-Pages Site 'Online Zoo'" target="_blank">View
                    this project <i className="fa-solid fa-up-right-from-square"></i></a>
                </li>
                <li className="portfolio-item">
                  <Image className="portfolio-screen" src={HofmannSite}
                    alt="Screenshot of Landing Site 'Hofmann'" />
                  <h3 className="portfolio-title">Landing Site &apos;Hofmann&apos;</h3>
                  <p className="portfolio-descr">Built with HTML, CSS</p>
                  <a className="portfolio-link-btn" href="https://helen25sur.github.io/hofmann/"
                    title="More about Landing Site 'Hofmann'" target="_blank">View
                    this project <i className="fa-solid fa-up-right-from-square"></i></a>
                </li>
                <li className="portfolio-item">
                  <Image className="portfolio-screen" src={LakehouseSite}
                    alt="Screenshot of Landing Site 'Lake House'" />
                  <h3 className="portfolio-title">Landing Site &apos;Lake House&apos;</h3>
                  <p className="portfolio-descr">Built with HTML, CSS</p>
                  <a className="portfolio-link-btn" href="https://helen25sur.github.io/lake-house-landing/"
                    title="More about Landing Site 'Lake House'" target="_blank">View
                    this project <i className="fa-solid fa-up-right-from-square"></i></a>
                </li>
                <li className="portfolio-item">
                  <Image className="portfolio-screen" src={MangatagalloSite}
                    alt="Screenshot of Landing Site 'Magnata Gallo'" />
                  <h3 className="portfolio-title">Landing Site &apos;Magnata Gallo&apos;</h3>
                  <p className="portfolio-descr">Built with HTML, CSS</p>
                  <a className="portfolio-link-btn" href="https://helen25sur.github.io/magnata-gallo/"
                    title="More about Landing Site 'Magnata Gallo'" target="_blank">View
                    this project <i className="fa-solid fa-up-right-from-square"></i></a>
                </li>
              </ul>
            </div>
          </section>
          <hr className="section-separator" />

          <section className="contact-section flex">
            <div className="contact-wrapper">
              <header className="contact-header">
                <h4 className="section-subtitle emphasise-txt">Contacts</h4>
                <h1 className="section-title">Let&apos;s get <span className="emphasise-txt">in touch!</span></h1>
              </header>
              <div className="contact-content flex">
                <Image className="contact-img"
                  src={ContactImg}
                  alt="Photo by LinkedIn Sales Solutions on Unsplash" />
                <div className="contacts">
                  <ul className="contacts-list flex flex-column">
                    <li className="contacts-item"><a className="contacts-link" href="mailto:elen21surilova@gmail.com"
                      title="Mail Olena"><i className="fa-solid fa-at emphasise-txt"></i>elen21surilova@gmail.com</a></li>
                    <li className="contacts-item"><a href="https://github.com/helen25sur" title="GitHub Profile" target="_blank"
                      rel="noopener noreferrer" className="contacts-link"><i
                        className="fa-brands fa-github emphasise-txt"></i>helen25sur</a></li>
                    <li className="contacts-item"><a href="https://www.linkedin.com/in/olena-surilova-8aa66b122/"
                      title="LinkedIn Profile" target="_blank" rel="noopener noreferrer" className="contacts-link"><i
                        className="fa-brands fa-linkedin emphasise-txt"></i>Olena Surilova</a></li>
                    <li className="contacts-item"><a href="https://www.instagram.com/elena_sur26/" title="Instagram Profile"
                      target="_blank" rel="noopener noreferrer" className="contacts-link"><i
                        className="fa-brands fa-instagram emphasise-txt"></i>@elena_sur26</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <hr className="section-separator" />
        </div>
      </main>

      <footer className="main-footer">
        <div className="container">
          <div className="footer-wrapper flex">
            <div className="logo-footer-wrapper">
              <Link href={'/'} title="Homepage" className="logo-footer-link flex">
                <Image width="72" height={72} className="header_logo-round" src={RoundAvatar} alt="round avatar" />
                <h3 className="logo-title">Olena Surilova,</h3>
                <h4>Web Developer</h4>
              </Link>
            </div>
            <a className="emphasise-txt" href="mailto:elen21surilova@gmail.com" title="Mail Olena">elen21surilova@gmail.com</a>
            <ul className="social-list flex">
              <li className="social-item"><a href="https://github.com/helen25sur" title="GitHub Profile" target="_blank"
                rel="noopener noreferrer" className="social-link"><FontAwesomeIcon icon={faGithub} width={16} /></a></li>
              <li className="social-item"><a href="https://www.linkedin.com/in/olena-surilova-8aa66b122/"
                title="LinkedIn Profile" target="_blank" rel="noopener noreferrer" className="social-link"><FontAwesomeIcon icon={faLinkedin} width={16} /></a></li>
              <li className="social-item"><a href="https://www.instagram.com/elena_sur26/" title="Instagram Profile"
                target="_blank" rel="noopener noreferrer" className="social-link"><FontAwesomeIcon icon={faInstagram} width={16} /></a>
              </li>
            </ul>
            <p className="footer-op">This project coded by Olena Surilova, and it is <a className="emphasise-txt"
              href="https://github.com/helen25sur/portfolio-site" title="GitHub Repository" target="_blank"
              rel="noopener noreferrer">open-sourced</a> </p>
          </div>
        </div>
      </footer>
    </>
  );
}
