import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaCodeBranch,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaRegUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./App.css";
import { LiaUserSolid } from "react-icons/lia";
import { MdOutlineFileDownload } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FiFileText } from "react-icons/fi";
import { ImBlog } from "react-icons/im";
import { AiOutlineHome } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
      <div className="sticky navbar navbar navbar-expand-md navbar-light fixed-top">
        <div className="container">
          <a href="" className="d-flex navbar-brand">
            <h1 className="purple" style={{ margin: "0px" }}>
              <b>Yp. </b>
            </h1>
          </a>
          <div className="navbar-collapse collapse">
            <div className="ms-auto navbar-nav">
              <div className="nav-item">
                <Link to="/" className="nav-link">
                  <AiOutlineHome
                    style={{ marginBottom: "5px", marginRight: "5px" }}
                  />
                  Home
                </Link>
              </div>
              <div className="nav-item">
                <Link to="/About" className="nav-link">
                  <LiaUserSolid
                    style={{ marginBottom: "5px", marginRight: "5px" }}
                  />
                  About
                </Link>
              </div>
              <div className="nav-item">
                <Link to="/Project" className="nav-link">
                  <AiOutlineFundProjectionScreen
                    style={{ marginBottom: "5px", marginRight: "5px" }}
                  />
                  Projects
                </Link>
              </div>
              <div className="nav-item">
                <Link to="/Resume" className="nav-link">
                  <FiFileText
                    style={{ marginBottom: "5px", marginRight: "5px" }}
                  />
                  Resume
                </Link>
              </div>
              <div className="nav-item">
                <a href="" className="nav-link">
                  <ImBlog style={{ marginBottom: "5px", marginRight: "5px" }} />
                  Blogs
                </a>
              </div>
              <div className="fork-btn nav-item">
                <a
                  href="https://github.com/Yagnik-2104/Portfolioyagnik"
                  target="_blank"
                  className="fork-btn-inner btn btn-primary"
                >
                  <FaCodeBranch style={{ marginRight: "5px" }} />
                  <FaStar style={{ marginLeft: "5px", marginBottom: "2px" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
