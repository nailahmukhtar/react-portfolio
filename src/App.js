import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Header from './components/Header';
import 'materialize-css/dist/css/materialize.min.css';

function App() {
    return (
      <Router basename="/react-portfolio">
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    )
}

export default App;
