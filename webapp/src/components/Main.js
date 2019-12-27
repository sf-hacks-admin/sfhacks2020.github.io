import React, { Component } from "react";
// import Navbar from "./CustNavbar";
import Nbar from "./Nbar";
import Home from "./Home";
import HomeComponent from "./HomeComponent";
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
          {/* <HomeComponent /> */}
          <Home />
        </div>
        <div className="row">
          <About />
        </div>
        <div className="row">
          <FAQ />
        </div>
        {/* <Sponsorship />
        <Footer /> */}
      </div>
    );
  }
}

export default Main;
