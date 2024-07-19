import "./About.css";
import myImg from "../../assets/me.png";

const About = () => {
  return (
    <main className="About">
      <div className="info">
        <p>
          Hello, My name is Hasan and im a <b id="job">Fullstack Developer</b>{" "}
        </p>
      </div>

      <div className="img-container">
        <img src={myImg} alt="my-img" />
      </div>
    </main>
  );
};

export default About;
