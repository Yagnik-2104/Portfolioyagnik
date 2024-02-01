import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaCodeBranch,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaRegUser,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="footer container-fluid">
        <div className="row">
          <div className="footer-copywright col-md-4">
            <h3>Designed and Developed by Yagnik Parmar</h3>
          </div>
          <div className="footer-copywright col-md-4">
            <h3>Copyright © 2024 YB</h3>
          </div>
          <div className="footer-body col-md-4">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/Yagnik-2104"
                  target="_blank"
                  style={{ color: "white" }}
                >
                  <FaGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/?lang=en"
                  target="_blank"
                  style={{ color: "white" }}
                >
                  <FaTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="www.linkedin.com/in/yagnik-parmar-021b6a252"
                  target="_blank"
                  style={{ color: "white" }}
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/yagnik2104/"
                  target="_blank"
                  style={{ color: "white" }}
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
