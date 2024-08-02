import "./Footer.css";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="Footer">
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=hasanromar2002@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiGmail className="gmail-icon icon" /> Hasanromar2002@gmail.com
      </a>
      <a href="https://www.linkedin.com/in/hasan-omar-123h/" target="_blank">
        <FaLinkedin className="linkedin-icon icon" /> Hasan Omar
      </a>
      <a href="https://github.com/hasanomar1" target="_blank">
        <FaGithub className="github-icon icon" /> Hasanomar1
      </a>
    </footer>
  );
};

export default Footer;
