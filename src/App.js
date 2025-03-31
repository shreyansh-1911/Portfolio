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
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const App = () => {
  return (
    <Router>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
      <section id="footer"><Footer /></section>
    </Router>

  );
};

export default App;
