import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// ProgressBar Component
const ProgressBar = ({ xp }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar-fill" style={{ width: `${xp}%` }}></div>
    </div>
  );
};

// Badge Component
const Badge = ({ xp }) => {
  let badgeText = 'Beginner';
  if (xp > 75) badgeText = 'Expert';
  else if (xp > 50) badgeText = 'Intermediate';

  return <div className="project-badge">{badgeText}</div>;
};

// Projects Component
function Projects() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const projectRefs = useRef([]);

  const projects = [
    {
      name: 'AI-Based Game',
      description: 'A 3D-rendered AI game where the AI is your opponent.',
      xp: 80,
    },
    {
      name: 'ML Compiler',
      description: 'A compiler integrating graph algorithms and advanced AI concepts.',
      xp: 60,
    },
    {
      name: 'Merge Sort in Assembly',
      description: 'Implemented merge sort in assembly language for user input.',
      xp: 50,
    },
  ];

  // Animations
  useEffect(() => {
    if (projectRefs.current) {
      gsap.to(projectRefs.current, {
        opacity: 1, // Set final opacity to 1
        y: 0, // Reset vertical position
        duration: 0.5,
        stagger: 0.2,
        ease: "power1.out", // Smooth easing for better effect
      });
    }
  }, []);
  

  return (
    <div>
      <h2 className="project-header">Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div
            ref={(el) => (projectRefs.current[index] = el)}
            key={index}
            className={`project-card ${hoverIndex === index ? 'project-card-hover' : ''}`}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <h3 className="project-title">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <Badge xp={project.xp} />
            <ProgressBar xp={project.xp} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
