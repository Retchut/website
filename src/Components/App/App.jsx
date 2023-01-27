import { useState, useEffect, useRef } from 'react';

import Footer from '../Footer/Footer.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import Home from '../../Sections/Home/Home.jsx';
import Projects from '../../Sections/Projects/Projects.jsx';
import Games from '../../Sections/Games/Games.jsx';
import Films from '../../Sections/Films/Films.jsx';
import Shows from '../../Sections/Shows/Shows.jsx';
import Music from '../../Sections/Music/Music.jsx';

function App() {
  const [ isMobile, setMobile ] = useState(false);

  const handleWindowResize = () => {
      if (window.innerWidth < 1140) {
          setMobile(true)
      } else {
          setMobile(false)
      }
  }

  useEffect(() => {
      window.addEventListener("resize", handleWindowResize)
  })

  const refs = {
    home : useRef(null),
    projects : useRef(null),
    games : useRef(null),
    music : useRef(null),
    films : useRef(null),
    shows : useRef(null)
  }

  // offset used because the sticky navbar takes up the top 60 px or so of the page
  // we add 30 more pixels because of the margin between page sections
  const scrollTopOffset = 90;
  const scrollToSection = (sectionName) => {
    const section = refs[sectionName];
    window.scrollTo({
      top : section.current.offsetTop - scrollTopOffset,
      left : section.current.offsetLeft,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <Navbar handleScroll={scrollToSection} />
      <section ref={refs.home} className="pb-10">
        <Home />
      </section>
      <section ref={refs.projects} className="pb-10">
        <Projects isMobile={isMobile}/>
      </section>
      <section ref={refs.games} className="pb-10">
        <Games isMobile={isMobile}/>
      </section>
      <section ref={refs.music} className="pb-10">
        <Music isMobile={isMobile}/>
      </section>
      <section ref={refs.films} className="pb-10">
        <Films isMobile={isMobile}/>
      </section>
      <section ref={refs.shows} className="pb-10">
        <Shows isMobile={isMobile}/>
      </section>
      <Footer />
    </>
  );
}

export default App;
