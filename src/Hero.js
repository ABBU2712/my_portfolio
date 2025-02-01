import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import avatar from './assets/profile.jpg'; 
import QuizGame from "./QuizGame"; 

function Hero() {
  return (
    <div className="hero-container">
      {/* Left Side - Text Content */}
      <div className="hero-text">
        <h1>Hello, I'm Abinash</h1>
        <p className="hero-tagline" title="A mathematical metaphor symbolizing growth and completeness.">
          In the pursuit of my convex hull
        </p>
        <p>Welcome to my gamified portfolio!</p>
        <p>Leveling up in AI, Networks and Quant</p>
        

        <div className="hero-buttons">
          <Link to="/about">
            <button>About Me</button>
          </Link>
          <Link to="/projects">
            <button>View Projects</button>
          </Link>
        </div>

        <h2>🎮 Quick Quiz: Know Me Better!</h2>
        <QuizGame />
      </div>

      {/* Right Side - Avatar */}
      <div className="hero-avatar">
        <img src={avatar} alt="Avatar" />
      </div>
    </div>
  );
}

export default Hero;
