import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
import '../css/footer.css'

function Footer() {
  return (
    <>
      <div className="footer">
        <p>&copy; David Herring 2023</p>
        <div className="icons">
          <a href="https://www.linkedin.com/in/david-herring-051bba241/">
            <AiFillLinkedin />
          </a>
          <a className="mid-icon" href="https://github.com/davidherring1998">
            <AiFillGithub />
          </a>
          <a href="https://twitter.com/DavidHe95802361">
            <AiFillTwitterCircle />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
