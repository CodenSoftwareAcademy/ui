import React from 'react';
import './App.css';
import Faq from './components/Faq';
import Courses from './components/Courses';
import Chapter from './components/Chapter';
import Header from './components/Header';
import Headline from './components/Headline';
import Roadmap from './components/Roadmap';
import Stack from './components/Stack';
import About from './components/About';
import Apply from './components/Apply';
import Week from './components/Week';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="site-container">
      <div className="section-a">
        <Header />
        <Headline />
      </div>
      <div id="about" className="section">
        <Chapter name="Despre Noi"/>
        <About />
        {/* <Stack /> */}
      </div>
      <div id="roadmap" className="section">
        <Chapter name="Structura Cursului"/>
        <Roadmap />
      </div>
      {/* <div className="section">
        <Chapter name="O saptamana tipica a cursului"/>
        <Week />
      </div> */}
      <div id="courses" className="section">
        <Chapter name="Calendar Cursuri"/>
        <Courses />
      </div>
      <div id="apply" className="section">
        <Chapter name="Procesul de Aplicare"/>
        <Apply />
      </div>
      <div id="review" className="section">
        <Chapter name="Ce Spun Studentii" />
      </div>
      <div id="faq" className="section">
        <Chapter name="Intrebari Frecvente"/>
        <Faq />
      </div>
      <div id="contact" className="section">
        <Chapter name="Contact"/>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
