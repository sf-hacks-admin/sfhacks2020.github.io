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
  componentDidMount = () => {
    console.log("here");
  };
  render() {
    return (
      <div className="body-color ">
        <Nbar />

        <div className="row">
          {/* <HomeComponent /> */}
          <Home />
        </div>
        <div className="">
          <About />
        </div>
        <FAQ />
        <Sponsorship />
        <Footer />
      </div>
    );
  }
}

export default Main;
