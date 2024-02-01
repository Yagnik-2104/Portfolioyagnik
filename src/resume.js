import "./App.css";
import { AiOutlineHome } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";
import {
  FaCodeBranch,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaRegUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import { LiaUserSolid } from "react-icons/lia";
import { MdOutlineFileDownload } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FiFileText } from "react-icons/fi";
import { ImBlog } from "react-icons/im";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "./img/img1.png";

const Resume = () => {
  return (
    <div>
      <div className="sticky navbar navbar navbar-expand-md navbar-light fixed-top">
        <div className="container">
          <a href="" className="d-flex navbar-brand">
            <h1 className="purple" style={{margin:'0px'}}><b>Yp. </b></h1>
          </a>
          <div className="navbar-collapse collapse">
            <div className="ms-auto navbar-nav">
              <div className="nav-item">
                <Link to="/" className="nav-link">
                  <AiOutlineHome style={{marginBottom:'5px',marginRight:"5px"}} />
                  Home
                </Link>
              </div>
              <div className="nav-item">
                <Link to="/About" className="nav-link">
                <LiaUserSolid style={{marginBottom:'5px',marginRight:"5px"}}  />
                  About
                </Link>
              </div>
              <div className="nav-item">
                <Link to="/Project" className="nav-link">
                <AiOutlineFundProjectionScreen style={{marginBottom:'5px',marginRight:"5px"}}  />
                  Projects
                </Link>
              </div>
              <div className="nav-item">
                <Link to="/Resume" className="nav-link">
                <FiFileText style={{marginBottom:'5px',marginRight:"5px"}}  />
                  Resume
                </Link>
              </div>
              <div className="nav-item">
                <a href="" className="nav-link">
                <ImBlog style={{marginBottom:'5px',marginRight:"5px"}}  />
                  Blogs
                </a>
              </div>
              <div className="fork-btn nav-item">
                <a href="https://github.com/Yagnik-2104/Portfolioyagnik" target="_blank" className="fork-btn-inner btn btn-primary">
                  <FaCodeBranch style={{marginRight:'5px'}} />
                  <FaStar style={{marginLeft:'5px',marginBottom:'2px'}} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="resume-section container-fluid">
          <div
            className="row"
            style={{ justifyContent: "center", position: "relative" }}
          >
            <a
              href="https://drive.google.com/file/d/1KEYHsAEV58L1dA2wRdLmbtdGlloeG0rt/view?usp=drive_link"
              target="_blank"
              className="btn btn-primary"
              style={{ maxWidth: "250px" }}
            >
              <MdOutlineFileDownload /> Download CV
            </a>
          </div>
          <div className="resume row">
            <div className="react-pdf__Document d-flex justify-content-center">
              <div className="react-pdf__Page" style={{ position: "relative" }}>
                <img src={img} alt="" className="w-100" />
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{ justifyContent: "center", position: "relative" }}
          >
            <a
              href="https://drive.google.com/file/d/1KEYHsAEV58L1dA2wRdLmbtdGlloeG0rt/view?usp=drive_link"
              target="_blank"
              className="btn btn-primary"
              style={{ maxWidth: "250px" }}
            >
              <MdOutlineFileDownload /> Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
