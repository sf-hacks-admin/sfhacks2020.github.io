import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";
import { duration } from "@material-ui/core";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

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
      color="white"
      light
      expand="md"
      fixed="top"
      style={{ margin: "0" }}
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
              style={{ cursor: "pointer", color: "#de6954" }}
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
              style={{ cursor: "pointer", color: "#de6954" }}
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
              style={{ cursor: "pointer", color: "#de6954" }}
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
              style={{ cursor: "pointer", color: "#de6954" }}
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
