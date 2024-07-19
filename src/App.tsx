import "./App.css";
import About from "./components/about/About";
import ParticlesTS from "./components/ParticlesTS";

const App = () => {
  return (
    <div className="App">
      <h1>Welcome To My Portfolio</h1>

      <ParticlesTS />
      <About />
    </div>
  );
};

export default App;
