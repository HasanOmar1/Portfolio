import VideoCard from "../videoCard/VideoCard";
import "./Projects.css";
import { projectDetails } from "../../utils/projects";

const Projects = () => {
  return (
    <section className="Projects section" id="projects-section">
      <h1 className="title">Projects</h1>

      <div className="projects-container">
        <VideoCard
          title={projectDetails.booksLibrary.title}
          videoSrc={projectDetails.booksLibrary.videoSrc}
          gitHubLink={projectDetails.booksLibrary.gitHubLink}
          websiteLink={projectDetails.booksLibrary.websiteLink}
        />
        <VideoCard
          title={projectDetails.kiraz.title}
          videoSrc={projectDetails.kiraz.videoSrc}
          gitHubLink={projectDetails.kiraz.gitHubLink}
          websiteLink={projectDetails.kiraz.websiteLink}
        />
      </div>
    </section>
  );
};

export default Projects;
