import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import WorkSection from './components/WorkSection'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Fade } from 'react-awesome-reveal'

function App() {
  return (
    <Fade>
      <div>
        <Header />
        <Home />
        <WorkSection />
        <AboutMe />
        <Contact />
        <Footer />
      </div>
    </Fade>
  );
}

export default App
