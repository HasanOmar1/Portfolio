import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import "./VideoCard.css";

type VideoCardProps = {
  video?: boolean;
  videoSrc?: string;
  image?: boolean;
  imageSrc?: string;
  gitHubLink: string;
  websiteLink: string;
  title: string;
};

const VideoCard = ({
  videoSrc,
  gitHubLink,
  websiteLink,
  title,
  video,
  image,
  imageSrc,
}: VideoCardProps) => {
  return (
    <div className="VideoCard">
      <h2 className="project-name">{title}</h2>
      {video && (
        <iframe
          src={videoSrc}
          title={`${title} Video`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        >
          Your Browser Does Not Support Iframes
        </iframe>
      )}
      {image && <img src={imageSrc} alt={title} />}
      {/* <iframe
        src={videoSrc}
        title={`${title} Video`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      >
        Your Browser Does Not Support Iframes
      </iframe> */}

      <div className="links-container">
        <div className="tooltip">
          <a className="links" href={gitHubLink} target="_blank">
            <FaGithub />
          </a>
          <div className="tooltip-text">GitHub</div>
        </div>
        <div className="tooltip">
          <a className="links" href={websiteLink} target="_blank">
            <CgWebsite />
          </a>
          <div className="tooltip-text">Website</div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
