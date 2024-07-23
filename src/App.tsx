import "./App.css";
import About from "./components/about/About";
import ContactMe from "./components/contactMe/ContactMe";
import Navbar from "./components/navbar/Navbar";
import ParticlesTS from "./components/ParticlesTS";
import Projects from "./components/projects/Projects";
import Tech from "./components/tech/Tech";

const App = () => {
  return (
    <>
      <ParticlesTS />
      <header>
        <Navbar />
      </header>

      <About />
      <Tech />
      <Projects />
      <ContactMe />
    </>
  );
};

export default App;
