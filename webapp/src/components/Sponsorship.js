import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Sponsorship extends Component {
  state = {};
  render() {
    return (
      <div
        className="col-12 align-self-center"
        style={{ height: "100vh", marginTop: "20px" }}
      >
        <div
          className="flex"
          style={{
            paddingTop: "5px",
            paddingBottom: "10px",
            maxWidth: "100vw",
            maxHeight: "100vh",
            minHeight: "100vh"
          }}
        >
          <img className="sponsors" src="./../assets/Sponsors.png" />
          <form action="mailto:sfhacksteam@gmail.com" method="GET">
            <Button
              variant="contained"
              color="#f2c2ba"
              type="submit"
              value="Send"
              style={{
                background: "#f2c2ba"
              }}
            >
              Interested in sponsoring?
              <FontAwesomeIcon
                className="icon-margin footericons"
                icon={faPaperPlane}
                size="lg"
              />
            </Button>
          </form>

          {/* <div className="sponsorstext">
            Interested in sponsoring? E-mail us at{" "}
            <a href="mailto:sfhacksteam@gmail.com" target="_blank">
              sfhacksteam@gmail.com
            </a>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Sponsorship;
