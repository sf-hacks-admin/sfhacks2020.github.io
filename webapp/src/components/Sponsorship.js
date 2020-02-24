import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Sponsorship extends Component {
  state = {};
  render() {
    return (
      <div className="col-12 align-self-center" style={{ marginTop: "20px" }}>
        <div
          style={{
            paddingTop: "5px",
            paddingBottom: "10px",
            minHeight: "100vh",
            marginLeft: "10%",
            marginRight: "10%"
          }}
        >
          <div style={{}}>
            <h1
              className="subheadings"
              style={{ textAlign: "center", fontSize: "xxx-large" }}
            >
              2020 SPONSORS
            </h1>
          </div>
          <div className="container-fluid" style={{ marginBottom: "20px" }}>
            <div
              className="row"
              style={{
                justifyContent: "center"
              }}
            >
              <div className="col-sm-12 sponsor-logo-lg">
                <img
                  src="/assets/Logos 2020/WW Logo.png "
                  alt="sponsor-logo"
                  className="sponsor-logo-img-lg"
                  style={{}}
                />
              </div>
            </div>
            <div
              className="row"
              style={{
                justifyContent: "center"
              }}
            >
              <div className="col-sm-4 sponsor-logo-md">
                <img
                  src="/assets/Logos 2020/Innovation and Entrepreneurship logo.png "
                  alt="sponsor-logo"
                  className="sponsor-logo-img"
                />
              </div>
              <div className="col-sm-4 sponsor-logo-md">
                <img
                  src="/assets/Logos 2020/Pathrise Logo.png "
                  alt="sponsor-logo"
                  className="sponsor-logo-img-md"
                />
              </div>
              {/* <div className="col-sm-4 sponsor-logo-md">
                <img
                  src="/assets/Logos 2020/WW Logo.png "
                  alt="sponsor-logo"
                  className="sponsor-logo-img"
                />
              </div> */}
            </div>
            <div
              className="row"
              style={{
                justifyContent: "center"
              }}
            >
              <div className="col-sm-4 sponsor-logo-sm">
                <img
                  src="/assets/Logos 2020/Notivize Logo.png "
                  alt="sponsor-logo"
                  className="sponsor-logo-img-sm"
                />
              </div>
              <div className="col-sm-4 sponsor-logo-sm">
                <img
                  src="/assets/Logos 2020/Microsoft Logo 3.png "
                  alt="sponsor-logo"
                  className="sponsor-logo-img-sm"
                />
              </div>
              <div className="col-sm-4 sponsor-logo-sm">
                <img
                  src="/assets/Logos 2020/Interview Cake Logo.png "
                  alt="sponsor-logo"
                  className="sponsor-logo-img-sm"
                />
              </div>
            </div>
            <div
              className="row"
              style={{
                justifyContent: "center"
              }}
            >
              <div className="col-sm-2 sponsor-logo-sm">
                <img
                  src="/assets/Logos 2020/YerbaMate Logo.png "
                  alt="sponsor-logo"
                  className="sponsor-logo-img-sm"
                />
              </div>
              <div className="col-sm-2 sponsor-logo-sm">
                <img
                  src="/assets/Logos 2020/COSE Logo.jpeg "
                  alt="sponsor-logo"
                  className="sponsor-logo-img-sm"
                />
              </div>
              <div className="col-sm-2 sponsor-logo-sm">
                <img
                  src="/assets/Logos 2020/sticker mule logo1.png "
                  alt="sponsor-logo"
                  className="sponsor-logo-img-sm"
                />
              </div>
              {/* <div className="col-sm-2 sponsor-logo-sm">
                <img
                  src="/assets/Logos 2020/Bare Logo.jpg "
                  alt="sponsor-logo"
                  className="sponsor-logo-img-sm"
                />
              </div> */}
              {/* <div className="col-sm-2 sponsor-logo-sm">
                <img
                  src="/assets/Logos 2020/Bobo's Logo1.png "
                  alt="sponsor-logo"
                  className="sponsor-logo-img-sm"
                />
              </div> */}
            </div>
            <div
              className="row"
              style={{
                justifyContent: "center"
              }}
            >
              <div className="col-sm-4 sponsor-logo-sm">
                <img
                  src="/assets/Logos 2020/COB Logo.jpg "
                  alt="sponsor-logo"
                  className="sponsor-logo-img-sm"
                />
              </div>
              {/* <div className="col-sm-4 sponsor-logo-sm">
                <img
                  src="/assets/Logos 2020/Desmos Logo.png "
                  alt="sponsor-logo"
                  className="sponsor-logo-img-sm"
                />
              </div> */}
              {/* <div className="col-sm-4 sponsor-logo-sm">
                <img
                  src="/assets/Logos 2020/GoGo Logo.jpg "
                  alt="sponsor-logo"
                  className="sponsor-logo-img-sm"
                />
              </div> */}
            </div>
          </div>
          <form action="mailto:sfhacksteam@gmail.com" method="GET">
            <Button
              variant="contained"
              type="submit"
              value="Send"
              style={{
                background: "rgba(253, 223, 179, 0.8)",
                display: "block",
                margin: "auto"
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
