import React from "react";
import { createRoot } from "react-dom/client";
import { ProjectList } from "./ProjectList.js";

const projects = [
  {
    name: "Project One",
    tech: "React, Node.js",
    link: "#",
  },
];

const container = document.getElementById("portfolio");
const root = createRoot(container);
root.render(<ProjectList projects={projects} />);