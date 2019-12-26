import React, { Component } from "react";
import Navbar from "./CustNavbar";
import Home from "./Home";
import About from "./About";
import FAQ from "./FAQ";
import Sponsorship from "./Sponsorship";
import Footer from "./Footer";
class Main extends Component {
  state = {};
  componentDidMount = () => {
    console.log("here");
  };
  render() {
    return (
      <div className="body-color bootstrap-container ">
        <Navbar />
        <Home />
        <About />
        <FAQ />
        <Sponsorship />
        <Footer />
      </div>
    );
  }
}

export default Main;
