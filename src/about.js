import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineHome } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";
import {
  FaCodeBranch,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaRegUser,
  FaHandPointRight,
  FaNode,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaReact,
} from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiVisualstudiocode,SiSublimetext  } from "react-icons/si";
import { SiTailwindcss,SiPostman  } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { LiaUserSolid } from "react-icons/lia";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FiFileText } from "react-icons/fi";
import { ImBlog } from "react-icons/im";
import { Link } from "react-router-dom";


const About = () => {
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
      <div className="about-section container-fluid">
        <div id="tsparticles">
          <canvas
            height="422"
            width="1912"
            style={{
              width: "100%",
              height: "100%",
              position: "fixed",
              zIndex: "0",
              top: "0px",
              left: "0px",
              pointerEvents: "none",
            }}
          ></canvas>
        </div>
        <div className="container">
          <div
            className="row"
            style={{ justifyContent: "center", padding: "10px" }}
          >
            <div
              className="col-md-7"
              style={{
                paddingTop: "30px",
                paddingBottom: "50px",
                justifyContent: "center",
              }}
            >
              <h1
                style={{
                  fontSize: "2.1em",
                  paddingBottom: "20px",
                  textAlign: "center",
                }}
              >
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <div className="quote-card-view card">
                <div className="card-body">
                  <p style={{ textAlign: "justify" }}>
                    Hi Everyone, I am{" "}
                    <span className="purple">Yagnik Parmar </span>from{" "}
                    <span className="purple"> Surat, India.</span>
                    <br />I am currently employed as a software developer at
                    Juspay. <br />I have completed Integrated MSc (IMSc) in
                    Maths and Computing at BIT Mesra. <br />
                    <br />
                    Apart from coding, some other activities that I love to do!
                  </p>
                  <ul>
                    <li className="about-activity">
                      <FaHandPointRight /> Playing Games
                    </li>
                    <li className="about-activity">
                      <FaHandPointRight /> Writing Tech Blogs
                    </li>
                    <li className="about-activity">
                      <FaHandPointRight /> Travelling
                    </li>
                  </ul>
                  <p
                    style={{ color: "rgb(155, 126, 172)", textAlign: "center" }}
                  >
                    "Strive to build things that make a difference!"
                  </p>
                  <p
                    style={{ textAlign: "center" }}
                    className="blockquote-footer"
                  >
                    Yagnik Parmar
                  </p>
                </div>
              </div>
            </div>
            <div
              className="about-img col-md-5"
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
            >
              <img
                src="https://soumyajit.vercel.app/static/media/about.aee0f771fbfc1e7b8fa8.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <h1 className="project-heading" style={{ textAlign: "center" }}>
            Professional <strong className="purple">Skillset </strong>
          </h1>
          <div
            className="row"
            style={{ justifyContent: "center", paddingBottom: "50px" }}
          >
            <div className="tech-icons col-md-2 col-4">
              <img
                src="https://i.redd.it/31b2ii8hchi31.jpg"
                style={{ height: "91px" }}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="tech-icons col-md-2 col-4">
              <img
                src="https://i.pinimg.com/originals/6e/46/e7/6e46e7dbe2bb73dacc055e5dbd85c3ad.png"
                style={{ height: "91px" }}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="tech-icons col-md-2 col-4">
              <IoLogoJavascript />
            </div>

            <div className="tech-icons col-md-2 col-4">
              <FaHtml5 />
            </div>
            <div className="tech-icons col-md-2 col-4">
              <FaCss3 />
            </div>
            <div className="tech-icons col-md-2 col-4">
              <FaBootstrap />
            </div>
            <div className="tech-icons col-md-2 col-4">
              <SiTailwindcss />
            </div>
            <div className="tech-icons col-md-2 col-4">
              <FaReact />
            </div>
            <div className="tech-icons col-md-2 col-4">
              <FaGithub />
            </div>
            <div className="tech-icons col-md-2 col-4">
              <SiRedux />
            </div>
          </div>
          <h1 style={{ textAlign: "center" }} className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <div
            className="row"
            style={{ justifyContent: "center", paddingBottom: "50px" }}
          >
            <div className="tech-icons col-md-2 col-4">
              <SiVisualstudiocode />
            </div>
            <div className="tech-icons col-md-2 col-4">
            <SiSublimetext />
            </div>
            <div className="tech-icons col-md-2 col-4">
            <SiPostman />
            </div>
          </div>
          <div className="row" style={{justifyContent:"center",paddingBottom:'10px',textAlign:'center'}}>
            <h1 className="project-heading">Days I <strong className="purple">Code</strong></h1>
            <div className="react-activity-calendar edit-1">
              <img src="https://raw.githubusercontent.com/grubersjoe/react-activity-calendar/HEAD/screenshot.png?v5" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer container-fluid">
        <div className="row">
          <div className="footer-copywright col-md-4"><h3>Designed and Developed by Yagnik Parmar</h3></div>
          <div className="footer-copywright col-md-4"><h3>Copyright © 2024 YB</h3></div>
          <div className="footer-body col-md-4">
            <ul className="footer-icons">
            <li className="social-icons">
                  <a href="https://github.com/Yagnik-2104" target="_blank" style={{color:'white'}}>
                    <FaGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a href="https://twitter.com/?lang=en" target="_blank" style={{color:'white'}}>
                    <FaTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a href="www.linkedin.com/in/yagnik-parmar-021b6a252" target="_blank" style={{color:'white'}}>
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a href="https://www.instagram.com/yagnik2104/" target="_blank" style={{color:'white'}}>
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

export default About;
