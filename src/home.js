import "bootstrap/dist/css/bootstrap.min.css";
// import "./home.css";
import { AiOutlineHome } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";
import {
  FaCodeBranch,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaRegUser ,
} from "react-icons/fa";
import { LiaUserSolid } from "react-icons/lia";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FiFileText } from "react-icons/fi";
import { ImBlog } from "react-icons/im";
import "./App.css";
import zIndex from "@mui/material/styles/zIndex";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="">
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
      <div id="home" className="home-section container-fluid">
        <div id="tsparticles">
          <canvas
            width="1912"
            height="422"
            style={{
              width: "100%",
              height: "100%",
              position: "fixed !important",
              top: "0px",
              left: "0px",
              PointerEvent: "none",
              zIndex: "none",
            }}
          ></canvas>
        </div>
        <div className="home-content container">
          <div className="row">
            <div className="home-header col-md-7">
              <h1 className="heading" style={{ paddingBottom: "15px" }}>
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'M <strong className="main-name">Yagnik Parmar</strong>
              </h1>
              <div style={{ padding: "50px", textAlign: "left" }}>
                <div className="Typewriter">
                  <span
                    className="Typewriter__wrapper"
                    data-testid="typewriter-wrapper"
                  >
                    React js developer
                  </span>
                  <span className="Typewriter__cursor">|</span>
                </div>
              </div>
            </div>
            <div className="col-md-5" style={{ paddingBottom: "20px" }}>
              <img
                src="https://soumyajit.vercel.app/static/media/home-main.541f8179af8209ce03ccf2178fe62dbf.svg"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div id="about" className="home-about-section container-fluid">
        <div className="container">
          <div className="row">
            <div className="home-about-description col-md-8">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF{" "}
              </h1>
              <p className="home-about-body">
                I fell in love with programming and I have at least learnt
                something, I think… 🤷‍♂️ <br />
                <br />I am fluent in classics like{" "}
                <i>
                  <b className="purple"> Html,css, Javascript and React js. </b>
                </i>
                <br />
                <br />
                My field of Interest's are building new{" "}
                <i>
                  <b className="purple">Web Technologies and Products </b> and
                  also in areas related to <b className="purple">Blockchain.</b>
                </i>{" "}
                <br />
                <br />
                Whenever possible, I also apply my passion for developing
                products with <b className="purple">Node.js</b> and{" "}
                <i>
                  <b className="purple">
                    Modern Javascript Library and Frameworks
                  </b>
                </i>{" "}
                like{" "}
                <i>
                  <b className="purple"> Angular.js and Next.js</b>
                </i>
              </p>
            </div>
            <div className="myAvtar col-md-4">
              <div className="rotet">
                <img
                  src="https://soumyajit.vercel.app/static/media/avatar.5852f40fbb38aa284829fa3fb7722225.svg"
                  alt="avatar"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="home-about-social col-md-12">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a href="https://github.com/Yagnik-2104" target="_blank" className="icon-colour  home-social-icons">
                    <FaGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a href="https://twitter.com/?lang=en" target="_blank" className="icon-colour  home-social-icons">
                    <FaTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a href="https://www.linkedin.com/in/yagnik-parmar-021b6a252/" target="_blank" className="icon-colour  home-social-icons">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a href="https://www.instagram.com/yagnik2104/" target="_blank" className="icon-colour  home-social-icons">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
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
                  <a href="https://www.linkedin.com/in/yagnik-parmar-021b6a252/" target="_blank" style={{color:'white'}}>
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

export default Home;
