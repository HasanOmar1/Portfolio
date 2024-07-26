import "./About.css";
import myImg from "../../assets/me.webp";

const About = () => {
  return (
    <main className="About section" id="about-section">
      <h1 className="title">About</h1>
      <div className="about-container">
        <div>
          <p>
            Hello, My name is<b id="name"> Hasan </b> and im a
            <b id="job"> Full Stack Developer </b>,I finished a Full Stack
            bootcamp at
            <b id="company"> Appleseeds</b> where I did an intensive 4 months of
            learning about the<span className="tech"> MERN Stack </span>
            <span className="tech">
              [MongoDB, ExpressJS, React and NodeJS]{" "}
            </span>
            then after that I did 2 months of internship at
            <b id="company"> Makes </b>where I was a team leader of 4 Full Stack
            juniors.
          </p>

          <p>
            After the bootcamp I learned more technologies such as
            <span className="tech"> TypeScript, SQL </span>
            and more!
          </p>
        </div>

        <div className="img-container hasan-tooltip">
          <img src={myImg} alt="hasan's photo'" />
          <span className="tooltip-text">Hasan</span>
        </div>
      </div>
    </main>
  );
};

export default About;
