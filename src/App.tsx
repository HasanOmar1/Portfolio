import "./App.css";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
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

      <main>
        <About />
        <Tech />
        <Projects />
        <Footer />
      </main>
    </>
  );
};

export default App;
