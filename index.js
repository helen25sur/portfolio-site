import { createRoot } from "react-dom/client";
import { ProjectList } from "./scripts/ProjectList.js";

const projects = [
    {
    id: "product-store-tailwind",
    name: "Product Store with Tailwind CSS",
    img: "/assets/images/projects/product-store-tailwind.png",
    tech: "Built with HTML, CSS, React.js and Tailwind CSS",
    link: "https://helen25sur.github.io/product-store-tailwind/",
  },
    {
    id: "onua-site",
    name: "Main Page National University 'Odesa Law Academy'",
    img: "/assets/images/projects/onua-site.png",
    tech: "Built with HTML, CSS and JavaScript",
    link: "https://onua.edu.ua/ua/",
  },
  {
    id: "weather-app",
    name: "Weather App",
    img: "/assets/images/projects/weather-app.png",
    tech: "Built with HTML, CSS and JavaScript",
    link: "https://guileless-pastelito-470cc1.netlify.app/",
  },
  {
    id: "calendar-app",
    name: "Calendar App",
    img: "/assets/images/projects/calendar-app.png",
    tech: "Built with HTML, CSS and JavaScript",
    link: "https://helen25sur.github.io/calendar-component/",
  },
   {
    id: "gsways-site",
    name: "GS Ways Multi-Pages Site",
    img: "/assets/images/projects/gsways-site.png",
    tech: "Built with HTML, CSS, JavaScript and Eleventy",
    link: "https://gsways.com/eng/",
  },
  {
    id: "courses-app",
    name: "SPA Courses App",
    img: "/assets/images/projects/courses-app.png",
    tech: "Built with HTML, CSS and Vue.js",
    link: "https://helen25sur.github.io/tech-task-genesis-frontend-school/",
  },
  {
    id: "stardb-app",
    name: "SPA Star Wars DB",
    img: "/assets/images/projects/stardb-app.png",
    tech: "Built with HTML, CSS and React.js",
    link: "https://helen25sur.github.io/star-db/",
  },
   {
    id: "candeleaf-site",
    name: "Online Shop 'Candeleaf'",
    img: "/assets/images/projects/candeleaf-site.png",
    tech: "Built with HTML, CSS and Node.js (in progress)",
    link: "https://candleaf2.onrender.com/",
  },
  {
    id: "hofmann-site",
    name: "Landing Site 'Hofmann'",
    img: "/assets/images/projects/hofmann-site.png",
    tech: "Built with HTML, CSS",
    link: "https://helen25sur.github.io/hofmann/",
  },
  {
    id: "lakehouse-site",
    name: "Landing Site 'Lake House'",
    img: "/assets/images/projects/lakehouse-site.png",
    tech: "Built with HTML, CSS",
    link: "https://helen25sur.github.io/lake-house-landing/",
  },
  {
    id: "magnatagallo-site",
    name: "Landing Site 'Magnata Gallo'",
    img: "/assets/images/projects/magnatagallo-site.png",
    tech: "Built with HTML, CSS",
    link: "https://helen25sur.github.io/magnata-gallo/",
  },
];

const container = document.getElementById("portfolio");
const root = createRoot(container);
root.render(<ProjectList projects={projects} />);