import React, { Component } from "react";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark ">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-item nav-link nav-center " href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-item nav-link nav-center" href="about.html">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-item nav-link nav-center " href="faq.html">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-item nav-link nav-center "
                  href="sponsor.html"
                >
                  Sponsorship
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
