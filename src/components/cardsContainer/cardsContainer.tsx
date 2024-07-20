import Card from "../card/Card";
import * as tech from "../../utils/assets";

const CardsContainer = () => {
  return (
    <div className="cards-container">
      <Card src={tech.html} alt="html" about="HTML" />
      <Card src={tech.css} alt="css" about="CSS" />
      <Card src={tech.javaScript} alt="JavaScript" about="JavaScript" />
      <Card src={tech.typeScript} alt="typeScript" about="TypeScript" />
      <Card src={tech.react} alt="React" about="React" />
      <Card src={tech.nodeJS} alt="nodeJS" about="NodeJS" />
      <Card src={tech.expressJS} alt="expressJS" about="ExpressJS" />
      <Card src={tech.mongoDB} alt="mongoDB" about="MongoDB" />
      <Card src={tech.sql} alt="sql" about="SQL" />
      <Card src={tech.git} alt="git" about="Git" />
      <Card src={tech.redux} alt="redux" about="ReduxJS" />
      <Card src={tech.bootstrap} alt="bootstrap" about="Bootstrap" />
      <Card src={tech.materialUI} alt="material UI" about="Material UI" />
      <Card
        src={tech.styledComponents}
        alt="styled Components"
        about="Styled Components"
      />
      <Card src={tech.jwt} alt="Json Web Token" about="Json Web Token" />
      <Card src={tech.puppeteer} alt="puppeteer" about="Puppeteer" />
    </div>
  );
};

export default CardsContainer;
