import React, { useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "Spotify Multiclass Genre Classification",
    description: "A music genre classifier using KNN and Random Forest, boosting accuracy by 17%.",
    techStack: ["Python", "Machine Learning", "Streamlit"],
    github: "https://github.com/ABBU2712/WINTER-PROJECT",
    demo: "",
  },
  {
    title: "Distributed Stock Price Prediction",
    description: "Real-time stock price prediction using ARIMA and LSTM models with AWS.",
    techStack: ["Python", "TensorFlow", "AWS"],
    github: "https://github.com/ABBU2712/STOCK-PRICE-PREDICTION",
    demo: "",
  },
  {
    title: "AI-Based Game",
    description: "A 3D-rendered game with AI as the opponent.",
    techStack: ["Python", "Unity", "Reinforcement Learning"],
    github: "",
    demo: "",
  },
  {
    title: "Horror Movie Rating Analysis",
    description: "Identified key factors for low ratings using RoBERTa and LDA.",
    techStack: ["Python", "NLP", "LDA", "RoBERTa"],
    github: "",
    demo: "",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card" onClick={() => openModal(project)}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <p>
              <strong>Tech Stack:</strong> {selectedProject.techStack.join(", ")}
            </p>
            {selectedProject.github && (
              <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
            {selectedProject.demo && (
              <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            )}
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
