import "./App.css";
import About from "./components/about/About";
import ParticlesTS from "./components/ParticlesTS";
import Projects from "./components/projects/Projects";
import Tech from "./components/tech/Tech";

const App = () => {
  return (
    <>
      <ParticlesTS />
      <About />
      <Tech />
      <Projects />
    </>
  );
};

export default App;
