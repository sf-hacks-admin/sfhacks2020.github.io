import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

import { Link } from "react-scroll";

const Nbar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const linktoggle = () => {
    if (isOpen) {
      toggle();
    }
  };
  document.getElementsByClassName("nav-link").onClick = ev => {
    ev.preventDefault();
  };

  return (
    <Navbar
      id="navbarr"
      // color="rgba(251, 175, 65, 1)"
      light
      expand="md"
      fixed="top"
      style={{
        margin: "0",
        backgroundColor: "RGB(99, 43, 142,0.65)",
        fontFamily: "Helvetica Neue",
        letterSpacing: "0.15em",
        lineHeight: "1.00"
      }}
    >
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar style={{ marginTop: "10px" }}>
        <Nav className="mr-auto" navbar>
          <NavItem className="NavItemStyle">
            <Link
              className="navbar-font"
              onClick={linktoggle}
              activeClass="active"
              to="homecomponent"
              spy={true}
              smooth={true}
              duration={500}
              style={{ cursor: "pointer", color: "#fbaf41" }}
            >
              Home
            </Link>
          </NavItem>
          <NavItem className="NavItemStyle">
            <Link
              className="navbar-font"
              onClick={linktoggle}
              activeClass="active"
              to="aboutcomponent"
              spy={true}
              smooth={true}
              duration={500}
              style={{ cursor: "pointer", color: "#fbaf41" }}
            >
              About
            </Link>
          </NavItem>
          <NavItem className="NavItemStyle">
            <Link
              className="navbar-font"
              onClick={linktoggle}
              activeClass="active"
              to="faqcomponent"
              spy={true}
              smooth={true}
              duration={500}
              style={{ cursor: "pointer", color: "#fbaf41" }}
            >
              FAQ
            </Link>
          </NavItem>
          <NavItem className="NavItemStyle">
            <Link
              className="navbar-font"
              onClick={linktoggle}
              activeClass="active"
              to="sponsorshipcomponent"
              spy={true}
              smooth={true}
              duration={500}
              style={{ cursor: "pointer", color: "#fbaf41" }}
            >
              Sponsorship
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Nbar;
