import React from "react";
import "App.scss";

import Contact from "components/Contact";
import Education from "components/Education";
import Languages from "components/Languages";
import WorkExperience from "components/WorkExperience";
import Volunteering from "components/Volunteering";
import OtherExperience from "components/OtherExperience";
import Projects from "components/Projects";
import Publications from "components/Publications";
import Header from "components/Header";
import Events from "components/Events";
import PublicSpeaking from "components/PublicSpeaking";
import Skills from "components/Skills";
import Awards from "components/Awards";
import Certificates from "components/Certificates";
import About from "components/About";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <div className="sidebar-wrapper">
          <Contact />
        </div>

        <div className="main-wrapper">
          <About />
          <Events />
        </div>
      </div>
      <div style={{ width: "100%", height: "7em" }}>
        <div
          style={{
            margin: 0,
            position: "relative",
            textAlign: "center",
            top: "4em",
            left: "50%",
            transform: "translate(-50%, 0%)"
          }}
        >
          <h1>Curriculum Vitae</h1>
        </div>
      </div>
      <div className="wrapper">
        <div className="sidebar-wrapper">
          <Education />
          <Languages />
          <Skills />
          <Awards />
          <Certificates />
        </div>

        <div className="main-wrapper">
          <WorkExperience />
          <Volunteering />
          <OtherExperience />
          <PublicSpeaking />
          <Projects />
          <Publications />
        </div>
      </div>

      <footer>
        <small className="copyright">
          Designed by Vojtěch Šimetka | © {new Date().getFullYear()}
        </small>
      </footer>
    </div>
  );
};

export default App;
