import React from 'react'
import './App.css'
import About from './components/pages/About/About'
import Homepage from './components/pages/Homepage/Homepage'
import Navigation from './components/pages/Navigation/Navigation'
import Skills from './components/pages/Skills/Skills'
import Portfolio from './components/pages/Portfolio/Portfolio'
import ContactUs from './components/pages/Contact_us/ContactUs'
import Footer from './components/pages/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <Homepage />
      <About />
      <Skills />
      <Portfolio />
      <ContactUs />
      <Footer /> */}
    </div>
  );
}

export default App;
