import { useState,useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About';
import Skills2 from './components/Skills2/Skills2';
// import Skills from './components/Skills/Skills';
// import Skills2 from './components/Skills2/Skills2';
import Contact from './components/Contact/Contact';
import Contact2 from './components/Contact2/Contact2';
import Education from './components/Education/Education';
// import Loader from './components/Loader/Loader';
import Footer from './components/Footer/Footer';
import ScrollToTopButton from './components/ScrollToTop/Scroll';
import Spinner from './components/Spinner/Spinner';

const useScrollToTop = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);
};



function App() {
  useScrollToTop();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Match this with Spinner animation duration
  }, []);

  return (
    <>
      {loading && <Spinner />}
      <div className={`app-content ${!loading ? 'show-content' : ''}`}>
        <Header />
        <Hero/>
        <div id="about"><About/> </div>
        <Education/>
        {/* <div>
          <div className='skills'>
            <div className='main-skills'>
              <Skills2/>
            </div>
          </div>
        </div> */}
        {/* <Skills/> */}
        <div className='skills'>
          <h2 className="skills-heading">
            Skills
          </h2>
          <div className="skills-canvas">
            <Skills2/>
          </div>
        </div>
        <div id="projects"></div>
        <Contact2/>
        <div id="contact"><Contact/></div>
        <Footer/>
        <ScrollToTopButton/>
      </div>
    </>
  )
}

export default App;
