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
      style={{ margin: "0", backgroundColor: "rgba(251, 175, 65, 0.8)" }}
    >
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
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
              style={{ cursor: "pointer", color: "#642c8f" }}
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
              style={{ cursor: "pointer", color: "#642c8f" }}
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
              style={{ cursor: "pointer", color: "#642c8f" }}
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
              style={{ cursor: "pointer", color: "#642c8f" }}
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
