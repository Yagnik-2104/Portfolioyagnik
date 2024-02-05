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
import Navbar from "./nav";
import Footer from "./footer";
import portfolio from "./img/portfolio.png"

const Project = () => {
  return (
    <div>
      <Navbar></Navbar>
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
                  src={portfolio}
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body" style={{ textAlign: "center" }}>
                  <div
                    className="card-title h5"
                    style={{ textAlign: "center" }}
                  >
                    My Portfolio
                  </div>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    Build a stylish portfolio website using React.js and
                    Bootstrap for a responsive and visually appealing design.
                    Showcase your skills, projects, and achievements with React
                    components, and ensure a seamless user experience with
                    Bootstrap's grid system and components. Impress visitors
                    with a modern and dynamic presentation of your work.
                  </p>
                  <a
                    href="https://github.com/Yagnik-2104/Portfolioyagnik"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    <FaGithub />
                    &nbsp; GitHub
                  </a>
                  <a
                    href="https://portfolioyagnik.vercel.app/"
                    target="_blank"
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
                  src="https://www.dotupp.com/wp-content/uploads/2020/10/affordable-ecommerce-website.png"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body" style={{ textAlign: "center" }}>
                  <div
                    className="card-title h5"
                    style={{ textAlign: "center" }}
                  >
                    Ecommerce Website
                  </div>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    Create a dynamic and responsive eCommerce website using
                    React.js and Bootstrap. Leverage React's component-based
                    architecture for seamless UI updates and Bootstrap's
                    pre-designed components for a modern and mobile-friendly
                    layout. Integrate state management for efficient data
                    handling, ensuring a smooth and interactive shopping
                    experience for users.
                  </p>
                  <a
                    href="https://github.com/Yagnik-2104/ecommercewebsite"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    <FaGithub />
                    &nbsp; GitHub
                  </a>
                  <a
                    href="https://ecommercewebsite-three.vercel.app/"
                    target="_blank"
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
                  src="https://www.sliderrevolution.com/wp-content/uploads/2021/09/Tastyc.jpg"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body" style={{ textAlign: "center" }}>
                  <div
                    className="card-title h5"
                    style={{ textAlign: "center" }}
                  >
                    Restourent Homepage
                  </div>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    Craft an inviting restaurant homepage using React.js and
                    Bootstrap, seamlessly blending React's dynamic components
                    with Bootstrap's polished design. Prioritize responsive
                    layout to enhance accessibility on diverse devices, creating
                    an engaging and visually appealing entrance for users to
                    explore the restaurant's offerings and services.
                  </p>
                  <a
                    href="https://github.com/Yagnik-2104/restourenthome"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    <FaGithub />
                    &nbsp; GitHub
                  </a>
                  <a
                    href="https://restourenthome.vercel.app/"
                    target="_blank"
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
                  src="https://thumbs.dreamstime.com/b/website-design-wireframe-ruler-monitor-campaign-web-home-homepage-landing-page-template-banner-modern-flat-style-193434001.jpg"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body" style={{ textAlign: "center" }}>
                  <div
                    className="card-title h5"
                    style={{ textAlign: "center" }}
                  >
                    IT Website Homepage
                  </div>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    Create an innovative IT website homepage using React.js,
                    featuring cutting-edge components for a dynamic user
                    experience. Utilize React's flexibility to showcase
                    services, technologies, and company information seamlessly.
                  </p>
                  <a
                    href="https://github.com/Yagnik-2104/Homepage"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    <FaGithub />
                    &nbsp; GitHub
                  </a>
                  <a
                    href="https://homepage-three-green.vercel.app/"
                    target="_blank"
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
                  src="https://www.shutterstock.com/image-vector/blog-computer-laptop-blogging-website-600nw-1992106385.jpg"
                  className="card-img-top"
                  alt=""
                />
                <div className="card-body" style={{ textAlign: "center" }}>
                  <div
                    className="card-title h5"
                    style={{ textAlign: "center" }}
                  >
                    Blog Api Website
                  </div>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    Build a robust blog API website with React.js, leveraging
                    its powerful frontend capabilities. Implement seamless
                    integration with backend APIs for dynamic content, ensuring
                    a user-friendly and responsive blogging experience.
                  </p>
                  <a
                    href="https://github.com/Yagnik-2104/Blogap"
                    target="_blank"
                    className="btn btn-primary"
                  >
                    <FaGithub />
                    &nbsp; GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Project;
