import VideoCard from "../videoCard/VideoCard";
import "./Projects.css";

const projectDetails = {
  booksLibrary: {
    title: "Books Library",
    videoSrc: "https://www.youtube.com/embed/ATxQpqJ1TVU?si=hXJwtfS8ga-QDssI",
    gitHubLink: "https://github.com/HasanOmar1/Book-Library-Fullstack",
    websiteLink: "https://books-library.netlify.app/",
  },
  kiraz: {
    title: "Kiraz",
    videoSrc: "https://www.youtube.com/embed/ATxQpqJ1TVU?si=hXJwtfS8ga-QDssI",
    gitHubLink: "https://github.com/HasanOmar1/Kiraz",
    websiteLink: "https://kiraz-clothing.netlify.app/",
  },
};

const Projects = () => {
  return (
    <section className="Projects section">
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
