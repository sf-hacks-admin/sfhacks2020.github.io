import React, { Component } from "react";
import Nbar from "./Nbar";
import Home from "./Home";
import About from "./About";
import FAQ from "./FAQ";
import Sponsorship from "./Sponsorship";
import Footer from "./Footer";

class Main extends Component {
  state = {};

  render() {
    return (
      <div className="body-color">
        <Nbar />

        <div className="row">
          <a href="/#" id="homecomponent">
            {null}
          </a>
          <Home />
        </div>
        <div className="row">
          <a href="/#" id="aboutcomponent">
            {null}
          </a>
          <About />
        </div>
        <div className="row">
          <a href="/#" id="faqcomponent">
            {null}
          </a>
          <FAQ />
        </div>
        <div className="row align-items-start">
          <a href="/#" id="sponsorshipcomponent">
            {null}
          </a>
          <Sponsorship />
        </div>

        <Footer />
        
      </div>
    );
  }
}

export default Main;
