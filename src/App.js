// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust the path as necessary
import Home from './components/Home'; // Example component
import About from './components/About'; // Example component
import Skills from './components/Skills'; // Example component
import Experience from './components/Experience'; // Example component
import Projects from './components/Project'; // Example component
import Contact from './components/Contact'; // Example component
import Footer from './components/Footer';
import './App.css'; // Import your CSS here


const App = () => {
  return (
    <Router>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="experience"><Experience /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
      <div id="contact"><Footer /></div>
    </Router>
  );
};

export default App;
