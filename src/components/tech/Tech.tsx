import "./Tech.css";
import Card from "../card/Card";
import mongoDB from "../../assets/mongoDB.png";
import react from "../../assets/react.png";
import javaScript from "../../assets/javascript.png";
import typeScript from "../../assets/typescript.png";
import nodeJS from "../../assets/nodeJS.png";
import expressJS from "../../assets/expressJS.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import sql from "../../assets/sql.png";
import git from "../../assets/git.png";
import redux from "../../assets/redux.png";
import bootstrap from "../../assets/bootstrap.png";
import materialUI from "../../assets/materialUI.png";
import styledComponents from "../../assets/styledComponents.png";
import jwt from "../../assets/jwt.png";
import puppeteer from "../../assets/puppeteer.png";

const Tech = () => {
  return (
    <section className="Tech section" id="tech-section">
      <h1 className="title">Technologies</h1>

      <div className="cards-container">
        <Card src={html} alt="html" about="HTML" />
        <Card src={css} alt="css" about="CSS" />
        <Card src={javaScript} alt="JavaScript" about="JavaScript" />
        <Card src={typeScript} alt="typeScript" about="TypeScript" />
        <Card src={react} alt="React" about="React" />
        <Card src={nodeJS} alt="nodeJS" about="NodeJS" />
        <Card src={expressJS} alt="expressJS" about="ExpressJS" />
        <Card src={mongoDB} alt="mongoDB" about="MongoDB" />
        <Card src={sql} alt="sql" about="SQL" />
        <Card src={git} alt="git" about="Git" />
        <Card src={redux} alt="redux" about="ReduxJS" />
        <Card src={bootstrap} alt="bootstrap" about="Bootstrap" />
        <Card src={materialUI} alt="material UI" about="Material UI" />
        <Card
          src={styledComponents}
          alt="styled Components"
          about="Styled Components"
        />
        <Card src={jwt} alt="Json Web Token" about="Json Web Token" />
        <Card src={puppeteer} alt="puppeteer" about="Puppeteer" />
      </div>
    </section>
  );
};

export default Tech;
