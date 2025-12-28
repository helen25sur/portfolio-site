import { createRoot } from "react-dom/client";
import { ProjectList } from "./scripts/ProjectList.js";

const projects = [
  {
    name: "Weather App",
    img: "/assets/images/projects/weather-app.png",
    tech: "Built with HTML, CSS and JavaScript",
    link: "https://guileless-pastelito-470cc1.netlify.app/",
  },
 
];

const container = document.getElementById("portfolio");
const root = createRoot(container);
root.render(<ProjectList projects={projects} />);