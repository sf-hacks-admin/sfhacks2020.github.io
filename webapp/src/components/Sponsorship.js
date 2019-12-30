import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Sponsorship extends Component {
  state = {};
  render() {
    return (
      <div
        className="col-12 align-self-center"
        style={{ overflow: "auto", marginTop: "20px" }}
      >
        <div
          className="flex"
          style={{
            paddingTop: "5px",
            paddingBottom: "10px",
            // maxWidth: "100vw",
            // maxHeight: "100vh",
            minHeight: "100vh"
          }}
        >
          <div style={{ marginBottom: "20px", marginTop: "20px" }}>
            <h1 className="h1" style={{ textAlign: "center" }}>
              2019 SPONSORS
            </h1>
          </div>
          <div style={{ objectFit: "contain" }}>
            <img
              className="sponsors"
              src="./../assets/Sponsors.png"
              alt="2019 SPONSORS"
            />
          </div>
          <form action="mailto:sfhacksteam@gmail.com" method="GET">
            <Button
              variant="contained"
              type="submit"
              value="Send"
              style={{
                background: "#c1aad2"
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
