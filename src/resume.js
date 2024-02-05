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
import Navbar from "./nav";
import Footer from "./footer";

const Resume = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div>
        <div className="resume-section container-fluid">
          <div
            className="row"
            style={{ justifyContent: "center", position: "relative" }}
          >
            <a
              href="https://drive.google.com/file/d/1ZVbEaaL9R8BhE7-v81PA7Ilc6CqoB7Gr/view?usp=drive_link"
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
              href="https://drive.google.com/file/d/1ZVbEaaL9R8BhE7-v81PA7Ilc6CqoB7Gr/view?usp=drive_link"
              target="_blank"
              className="btn btn-primary"
              style={{ maxWidth: "250px" }}
            >
              <MdOutlineFileDownload /> Download CV
            </a>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Resume;
