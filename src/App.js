import Header from './components/Header.js';
import Intro from './components/Intro.js';
import SkillBanner from './components/SkillBanner.js';
import Experience from './components/Experience.js';
import Projects from './components/Projects.js';
import Footer from './components/Footer.js';
import Contact from './components/Contact.js';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Intro />
      <SkillBanner />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
