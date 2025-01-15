import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import avatar from './assets/download.jpeg'; // Ensure your avatar image is placed in the assets folder

function Hero() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <img 
        src={avatar} 
        alt="Avatar" 
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          border: '3px solid #00ff00',
          marginBottom: '20px',
        }}
      />
      
      <h1
        style={{
          fontSize: '2.5rem',
          color: '#00ff00',
          textShadow: '0 0 10px #00ff00, 0 0 20px #00ff00',
        }}
      >
        Hello, I'm Abinash
      </h1>

      <p style={{ color: '#ffffff', fontSize: '1.2rem' }}>
        Welcome to my gamified portfolio!
      </p>
      <p style={{ color: '#ffffff', fontSize: '1.2rem' }}>
        Leveling up in AI, Compilers, and Code
      </p>

      <div style={{ marginTop: '30px' }}>
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <button
            style={{
              padding: '10px 20px',
              margin: '10px',
              backgroundColor: '#00ff00',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              color: '#000',
              fontWeight: 'bold',
              fontSize: '1rem',
              transition: 'transform 0.2s, background-color 0.2s',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#00cc00')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#00ff00')}
            onMouseDown={(e) => (e.target.style.transform = 'scale(0.95)')}
            onMouseUp={(e) => (e.target.style.transform = 'scale(1)')}
          >
            About Me
          </button>
        </Link>

        <Link to="/projects" style={{ textDecoration: 'none' }}>
          <button
            style={{
              padding: '10px 20px',
              margin: '10px',
              backgroundColor: '#00ff00',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              color: '#000',
              fontWeight: 'bold',
              fontSize: '1rem',
              transition: 'transform 0.2s, background-color 0.2s',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#00cc00')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#00ff00')}
            onMouseDown={(e) => (e.target.style.transform = 'scale(0.95)')}
            onMouseUp={(e) => (e.target.style.transform = 'scale(1)')}
          >
            View Projects
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
