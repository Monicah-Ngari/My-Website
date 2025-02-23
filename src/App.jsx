import React, { useEffect } from "react";
import { motion } from "framer-motion";
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
import Certificates from "./Components/Certificates";
import Languages from "./Components/Languages";

const App = () => {
  useEffect(() => {
    document.title = "Monicah's Website";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3 }}
    >
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
            <Languages />
          </div>
          <div>
            <Certificates />
          </div>
        </div>
        <div>
          <Footer />
          <Contact />
        </div>
      </div>
    </motion.div>
  );
};

export default App;
