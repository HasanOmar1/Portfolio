import VideoCard from "../videoCard/VideoCard";
import "./Projects.css";
import { projectDetails } from "../../utils/projects";

const Projects = () => {
  return (
    <section className="Projects section" id="projects-section">
      <h1 className="title">Projects</h1>

      <div className="projects-container">
        <VideoCard
          video
          title={projectDetails.booksLibrary.title}
          videoSrc={projectDetails.booksLibrary.videoSrc}
          gitHubLink={projectDetails.booksLibrary.gitHubLink}
          websiteLink={projectDetails.booksLibrary.websiteLink}
        />
        <VideoCard
          video
          title={projectDetails.kiraz.title}
          videoSrc={projectDetails.kiraz.videoSrc}
          gitHubLink={projectDetails.kiraz.gitHubLink}
          websiteLink={projectDetails.kiraz.websiteLink}
        />
      </div>

      <h2 className="bootcamp-title">Bootcamp Projects</h2>

      <div className="projects-container">
        <VideoCard
          image
          title={projectDetails.gamesFinder.title}
          imageSrc={projectDetails.gamesFinder.imgSrc}
          gitHubLink={projectDetails.gamesFinder.gitHubLink}
          websiteLink={projectDetails.gamesFinder.websiteLink}
        />
        <VideoCard
          image
          title={projectDetails.minecraft.title}
          imageSrc={projectDetails.minecraft.imgSrc}
          gitHubLink={projectDetails.minecraft.gitHubLink}
          websiteLink={projectDetails.minecraft.websiteLink}
        />
      </div>
    </section>
  );
};

export default Projects;
