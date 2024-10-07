import React from "react";
import projects from "./projectsData";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>مشاريعي</h1>
      <div className="project-cards">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />{" "}
            {/* إضافة الصورة */}
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>عرض المشروع</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
