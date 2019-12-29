import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
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
            height: "1.2vw"
          }}
        >
          <div className="col-3">
            {/* {" "}
              <a href="#" className="footericons" target="_blank">
                {"<SF Hacks>"}
              </a> */}
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
                {"<SF Hacks>"}
              </Link>
            </div>
            <div className="row align-items-center">
              <a href="https://facebook.com/sfhacks">
                <FontAwesomeIcon
                  className="icon-margin footericons"
                  icon={faFacebook}
                  size="lg"
                />
              </a>
              <a href="https://twitter.com/SF_hacks">
                <FontAwesomeIcon
                  className="icon-margin footericons"
                  icon={faTwitter}
                  size="lg"
                />
              </a>
              <a href="https://instagram.com/sf.hacks" id="insta">
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
              <div className="col-sm-9">
                San Francisco State University | 1600 Holloway Avenue . San
                Francisco . CA 94132
              </div>
              <div className="col-sm-3">
                <span style={{ fontWeight: "700", fontSize: "19px" }}>
                  Contact us
                </span>
                <br />
                Feel free to reach out to us at{" "}
                <a
                  href="mailto:sfhacksteam@gmail.com"
                  style={{ color: "#de6954" }}
                >
                  sfhacksteam@gmail.com
                </a>{" "}
                for any further questions or quarries
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
