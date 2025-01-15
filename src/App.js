import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Navbar from './NavBar'; // Uncomment if Navbar is implemented

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20%' }}>
        {/* Loading Spinner */}
        <div
          style={{
            width: '50px',
            height: '50px',
            border: '5px solid #00ff00',
            borderTop: '5px solid transparent',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
          }}
        ></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        {/* Uncomment the Navbar once implemented */}
        <Navbar />
        <h1>Welcome to My Portfolio</h1>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
