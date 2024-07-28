import React from "react";
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

// const [formData, setFormData] = useState({
//   name: "",
//   contacts: "",
//   email: "",
// });

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
