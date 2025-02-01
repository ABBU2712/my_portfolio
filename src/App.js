import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Navbar from './NavBar'; 
import Preloader from "./Preloader"; // Import Preloader

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for 3 seconds, then remove the preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Preloader />  // ✅ Removed the onComplete prop
  ) : (
    <Router>
      <div className="App">
        <Navbar />
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
