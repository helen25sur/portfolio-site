import { createRoot } from "react-dom/client";
import { ProjectList } from "./scripts/ProjectList.js";

const projects = [
    {
    id: "product-store-tailwind",
    name: "Product Store with Tailwind CSS",
    img: "/assets/images/projects/product-store-tailwind.png",
    tech: ["HTML", "React.js", "Tailwind CSS"],
    description: "A frontend-focused e-commerce application designed with a mobile-first approach. The project emphasizes clean component architecture. Styled exclusively with Tailwind CSS, it demonstrates the ability to create sophisticated, modern interfaces with high performance and intuitive user flows.",
    link: "https://helen25sur.github.io/product-store-tailwind/",
    codeLink: "https://github.com/helen25sur/product-store-tailwind",
  },
    {
    id: "onua-site",
    name: "Main Page National University 'Odesa Law Academy'",
    img: "/assets/images/projects/onua-site.png",
    tech: ["HTML", "CSS", "JavaScript(ES6+)"],
    description: "A professional frontend implementation of the university's official landing page. The project focuses on a clean, authoritative design with a highly organized information architecture. It features a responsive grid layout, interactive navigation, and optimized media content to ensure a seamless experience for students and visitors.",
    link: "https://onua.edu.ua/ua/",
  },
  {
    id: "weather-app",
    name: "Weather App",
    img: "/assets/images/projects/weather-app.png",
    tech: ["HTML", "CSS", "JavaScript(ES6+)"],
    description: "A sleek, interactive weather application providing real-time meteorological data. The project features a modern UI design, offering users a clear and visually appealing way to track current conditions and multi-day forecasts. Built with a focus on asynchronous API integration and dynamic DOM manipulation to ensure accurate, up-to-the-minute weather updates for any location.",
    link: "https://guileless-pastelito-470cc1.netlify.app/",
    codeLink: "https://github.com/helen25sur/weather-app",
  },
  {
    id: "calendar-app",
    name: "Interactive Glassmorphism Calendar",
    img: "/assets/images/projects/calendar-app.png",
    tech: ["HTML", "CSS", "JavaScript(ES6+)"],
    description: "A visually elegant UI component featuring a modern 'glass' effect with soft transparency and background blurring. This project focuses on high-end CSS styling and precise layout management. It provides a clean, intuitive interface for date tracking, demonstrating a strong command of modern web design trends and aesthetic consistency.",
    link: "https://helen25sur.github.io/calendar-component/",
    codeLink: "https://github.com/helen25sur/calendar-component",
  },
   {
    id: "gsways-site",
    name: "GS Ways Multi-Pages Site",
    img: "/assets/images/projects/gsways-site.png",
    tech:  ["HTML", "CSS", "JavaScript(ES6+)", "Eleventy"],
    link: "https://gsways.com/eng/",
    codeLink: "https://github.com/helen25sur/gsw",
  },
  {
    id: "courses-app",
    name: "SPA Courses App",
    img: "/assets/images/projects/courses-app.png",
    tech:  ["HTML", "CSS", "Vue.js"],
    link: "https://helen25sur.github.io/tech-task-genesis-frontend-school/",
    codeLink: "https://github.com/helen25sur/tech-task-genesis-frontend-school",
  },
  {
    id: "stardb-app",
    name: "SPA Star Wars DB",
    img: "/assets/images/projects/stardb-app.png",
    tech:  ["HTML", "CSS", "React.js"],
    link: "https://helen25sur.github.io/star-db/",
    codeLink: "https://github.com/helen25sur/star-db",
  },
   {
    id: "candeleaf-site",
    name: "Online Shop 'Candeleaf'",
    img: "/assets/images/projects/candeleaf-site.png",
    tech: ["HTML", "CSS", "Node.js"],
    link: "https://candleaf2.onrender.com/",
    codeLink: "https://github.com/helen25sur/online-shop-nodejs",
  },
  {
    id: "hofmann-site",
    name: "Landing Site 'Hofmann'",
    img: "/assets/images/projects/hofmann-site.png",
    tech:  ["HTML", "CSS"],
    link: "https://helen25sur.github.io/hofmann/",
    codeLink: "https://github.com/helen25sur/hofmann",
  },
  {
    id: "lakehouse-site",
    name: "Landing Site 'Lake House'",
    img: "/assets/images/projects/lakehouse-site.png",
    tech:  ["HTML", "CSS"],
    link: "https://helen25sur.github.io/lake-house-landing/",
    codeLink: "https://github.com/helen25sur/lake-house-landing",
  },
  {
    id: "magnatagallo-site",
    name: "Landing Site 'Magnata Gallo'",
    img: "/assets/images/projects/magnatagallo-site.png",
    tech: ["HTML", "CSS"],
    link: "https://helen25sur.github.io/magnata-gallo/",
    codeLink: "https://github.com/helen25sur/magnata-gallo",
  },
];

const container = document.getElementById("portfolio");
const root = createRoot(container);
root.render(<ProjectList projects={projects} />);