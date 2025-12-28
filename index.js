import { createRoot } from "react-dom/client";
import { ProjectList } from "./scripts/ProjectList.js";

const projects = [
  {
    name: "Weather App",
    img: "/assets/images/projects/weather-app.png",
    tech: "Built with HTML, CSS and JavaScript",
    link: "https://guileless-pastelito-470cc1.netlify.app/",
  },
  {
    name: "Calendar App",
    img: "/assets/images/projects/calendar-app.png",
    tech: "Built with HTML, CSS and JavaScript",
    link: "https://helen25sur.github.io/calendar-component/",
  },
   {
    name: "GS Ways Multi-Pages Site",
    img: "/assets/images/projects/gsways-site.png",
    tech: "Built with HTML, CSS, JavaScript and Eleventy",
    link: "https://gsways.com/eng/",
  },
  {
    name: "SPA Courses App",
    img: "/assets/images/projects/courses-app.png",
    tech: "Built with HTML, CSS and Vue.js",
    link: "https://helen25sur.github.io/tech-task-genesis-frontend-school/",
  },
  {
    name: "SPA Star Wars DB",
    img: "/assets/images/projects/stardb-app.png",
    tech: "Built with HTML, CSS and React.js",
    link: "https://helen25sur.github.io/star-db/",
  },
   {
    name: "Online Shop 'Candeleaf'",
    img: "/assets/images/projects/candeleaf-site.png",
    tech: "Built with HTML, CSS and Node.js (in progress)",
    link: "https://candleaf2.onrender.com/",
  },
  {
    name: "Landing Site 'Hofmann'",
    img: "/assets/images/projects/hofmann-site.png",
    tech: "Built with HTML, CSS",
    link: "https://helen25sur.github.io/hofmann/",
  },
  {
    name: "Landing Site 'Lake House'",
    img: "/assets/images/projects/lakehouse-site.png",
    tech: "Built with HTML, CSS",
    link: "https://helen25sur.github.io/lake-house-landing/",
  },
  {
    name: "Landing Site 'Magnata Gallo'",
    img: "/assets/images/projects/magnatagallo-site.png",
    tech: "Built with HTML, CSS",
    link: "https://helen25sur.github.io/magnata-gallo/",
  },
];

const container = document.getElementById("portfolio");
const root = createRoot(container);
root.render(<ProjectList projects={projects} />);