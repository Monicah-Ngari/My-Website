import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  useEffect(() => {
    document.title = "Monicah's Website";
  }, []);

  return (
    <div className="App">
      <Header />
      <Home />
      <div className="content-grid">
        <div>
          <About />
        </div>
        <div>
          {" "}
          <Projects />
        </div>
        <div>
          <Skills />
        </div>
        <div>
          {" "}
          <Education />
        </div>
        <div>
          <Contact />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
