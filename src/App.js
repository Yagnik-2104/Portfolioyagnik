import "./App.css";
import Home from "./home";
import About from "./about";
import Project from "./project";
import Resume from "./resume";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./nav";
import Footer from "./footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Home></Home> */}
      {/* <About></About> */}
      {/* <Project></Project> */}
      {/* <Resume></Resume> */}
      {/* <Navbar></Navbar> */}
      {/* <Footer></Footer> */}

      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/About" element={<About></About>}></Route>
          <Route path="/Project" element={<Project></Project>}></Route>
          <Route path="/Resume" element={<Resume></Resume>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
