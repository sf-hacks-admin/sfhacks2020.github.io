import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";
class Footer extends Component {
  state = {};
  render() {
    return (
      <footer>
        <div
          className="row align-items-center"
          style={{
            margin: "5px",
            padding: "10px",
            minHeight: "150px",
            height: "auto",
            marginBottom: "0"
          }}
        >
          <div className="col-3">
            {/* {" "}
              <a href="#" className="footericons" target="_blank">
                {"<SF Hacks>"}
              </a> */}
            <div className="row align-items-center " style={{ padding: "0" }}>
              <Link
                activeClass="active"
                to="homecomponent"
                spy={true}
                smooth={true}
                duration={500}
                style={{ cursor: "pointer", width: "15%", minWidth: "50px" }}
              >
                <img
                  src="./../assets/logo.png"
                  alt="Logo"
                  className="logofooter"
                />
              </Link>
            </div>
            <div className="row align-items-center">
              <Link
                className="sfhackstext"
                activeClass="active"
                to="homecomponent"
                spy={true}
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                {"SF Hacks"}
              </Link>
            </div>
            <div className="row align-items-center">
              <a href="https://facebook.com/sfhacks" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  className="icon-margin footericons"
                  icon={faFacebook}
                  size="lg"
                />
              </a>
              <a href="https://twitter.com/SF_hacks" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  className="icon-margin footericons"
                  icon={faTwitter}
                  size="lg"
                />
              </a>
              <a
                href="https://instagram.com/sf.hacks"
                target="_blank" rel="noopener noreferrer"
                id="insta"
              >
                <FontAwesomeIcon
                  className="icon-margin footericons"
                  icon={faInstagram}
                  size="lg"
                />
              </a>
            </div>
          </div>
          <div
            className="col-9 align-self-center"
            style={{ textAlign: "center" }}
          >
            <div className="row">
              <div className="col-sm-9 align-self-center">
                San Francisco State University
                <br />
                STUDENT ACITIVITES AND EVENTS CENTER (ANNEX I),
                <br /> 1600 Holloway Avenue, <br />
                San Francisco, CA 94132
              </div>
              <div className="col-sm-3 align-self-center">
                <span style={{ fontWeight: "700", fontSize: "19px" }}>
                  Contact us
                </span>
                <br />
                Feel free to reach out to us at{" "}
                <a
                  href="mailto:sfhacksteam@gmail.com"
                  style={{ color: "#632b90" }}
                >
                  sfhacksteam@gmail.com
                </a>{" "}
                for any further questions or queries
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
