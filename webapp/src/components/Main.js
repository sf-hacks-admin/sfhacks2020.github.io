import React, { Component } from "react";
// import Navbar from "./CustNavbar";
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
          <a id="homecomponent" />
          <Home />
        </div>
        <div className="row">
          <a id="aboutcomponent" />
          <About />
        </div>
        <div className="row">
          <a id="faqcomponent" />
          <FAQ />
        </div>
        <div className="row align-items-start">
          <a id="sponsorshipcomponent" />
          <Sponsorship />
        </div>

        <Footer />
      </div>
    );
  }
}

export default Main;
