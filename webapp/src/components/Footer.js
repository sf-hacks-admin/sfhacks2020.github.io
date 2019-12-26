import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
class Footer extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="footercon">
          <footer>
            <section className="social">
              <div className="rows">
                San Francisco State University | 1600 Holloway Avenue . San
                Francisco . CA 94132
              </div>

              <div className="rows">
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
            </section>
          </footer>
        </div>
      </div>
    );
  }
}

export default Footer;
