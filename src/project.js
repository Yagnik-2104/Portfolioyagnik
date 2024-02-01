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
} from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { LiaUserSolid } from "react-icons/lia";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FiFileText } from "react-icons/fi";
import { ImBlog } from "react-icons/im";
import { Link } from "react-router-dom";

const Project = () => {
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
                <a href="" className="fork-btn-inner btn btn-primary">
                  <FaCodeBranch style={{marginRight:'5px'}} />
                  <FaStar style={{marginLeft:'5px',marginBottom:'2px'}} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project-section container-fluid">
        <div className="container">
          <h1 className="project-heading" style={{ textAlign: "center" }}>
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white", textAlign: "center" }}>
            Here are a few projects I've worked on recently.
          </p>
          <div
            className="row"
            style={{ justifyContent: "center", paddingBottom: "10px" }}
          >
            <div className="project-card col-md-4">
              <div className="project-card-view card">
                <img
                  src="https://soumyajit.vercel.app/static/media/chatify.7206044e0b5cdad44726.png"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body" style={{ textAlign: "center" }}>
                  <div
                    className="card-title h5"
                    style={{ textAlign: "center" }}
                  >
                    chatify
                  </div>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    Personal Chat Room or Workspace to share resources and
                    hangout with friends build with react.js, Material-UI, and
                    Firebase. Have features which allows user for realtime
                    messaging, image sharing as well as supports reactions on
                    messages.
                  </p>
                  <a href="" className="btn btn-primary">
                    <FaGithub />
                    &nbsp; GitHub
                  </a>
                  <a
                    href=""
                    className="btn btn-primary"
                    style={{ marginLeft: "10px" }}
                  >
                    <CgNotes /> &nbsp;Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card col-md-4">
              <div className="project-card-view card">
                <img
                  src="https://soumyajit.vercel.app/static/media/blog.fb8ab7f271a937d5fc01.png"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body" style={{ textAlign: "center" }}>
                  <div
                    className="card-title h5"
                    style={{ textAlign: "center" }}
                  >
                    Bits-0f-C0de
                  </div>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                  My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown.
                  </p>
                  <a href="" className="btn btn-primary">
                    <FaGithub />
                    &nbsp; GitHub
                  </a>
                  <a
                    href=""
                    className="btn btn-primary"
                    style={{ marginLeft: "10px" }}
                  >
                    <CgNotes /> &nbsp;Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card col-md-4">
              <div className="project-card-view card">
                <img
                  src="https://soumyajit.vercel.app/static/media/codeEditor.1b585492490c8c1cace9.png"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body" style={{ textAlign: "center" }}>
                  <div
                    className="card-title h5"
                    style={{ textAlign: "center" }}
                  >
                    Editor.io
                  </div>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                  Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage
                  </p>
                  <a href="" className="btn btn-primary">
                    <FaGithub />
                    &nbsp; GitHub
                  </a>
                  <a
                    href=""
                    className="btn btn-primary"
                    style={{ marginLeft: "10px" }}
                  >
                    <CgNotes /> &nbsp;Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card col-md-4">
              <div className="project-card-view card">
                <img
                  src="https://soumyajit.vercel.app/static/media/leaf.ff2616f664c8c0ceab91.png"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body" style={{ textAlign: "center" }}>
                  <div
                    className="card-title h5"
                    style={{ textAlign: "center" }}
                  >
                    Plant AI
                  </div>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                  Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model.
                  </p>
                  <a href="" className="btn btn-primary">
                    <FaGithub />
                    &nbsp; GitHub
                  </a>
                  <a
                    href=""
                    className="btn btn-primary"
                    style={{ marginLeft: "10px" }}
                  >
                    <CgNotes /> &nbsp;Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card col-md-4">
              <div className="project-card-view card">
                <img
                  src="https://soumyajit.vercel.app/static/media/suicide.9c86cd7138a398c45fa5.png"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body" style={{ textAlign: "center" }}>
                  <div
                    className="card-title h5"
                    style={{ textAlign: "center" }}
                  >
                    Ai For Social Good
                  </div>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                  Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention.
                  </p>
                  <a href="" className="btn btn-primary">
                    <FaGithub />
                    &nbsp; GitHub
                  </a>
                  
                </div>
              </div>
            </div>

            <div className="project-card col-md-4">
              <div className="project-card-view card">
                <img
                  src="https://soumyajit.vercel.app/static/media/emotion.eabfc16e7a146ab15778.png"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body" style={{ textAlign: "center" }}>
                  <div
                    className="card-title h5"
                    style={{ textAlign: "center" }}
                  >
                    Face Recognition and Emotion Detection
                  </div>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                  Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%. Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person.
                  </p>
                  <a href="" className="btn btn-primary">
                    <FaGithub />
                    &nbsp; GitHub
                  </a>
                  
                </div>
              </div>
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

export default Project;
