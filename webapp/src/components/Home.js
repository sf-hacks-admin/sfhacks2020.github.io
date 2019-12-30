import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Home extends Component {
  render() {
    const SFHACKS = "SF Hacks";

    return (
      <div className="flex" style={{ overflow: "auto", minHeight: "100vh" }}>
        <img src="./../assets/logo.png" alt="Logo" className="logo2" />

        <h1>{SFHACKS}</h1>

        <p className="place">
          San Francisco State University
          <br /> San Francisco, California
        </p>

        <p className="date">
          March 28 - 29<sup>th</sup>, 2020
        </p>
        <p className="place">
          Application deadline: Feb 21<sup>st</sup> 2020
        </p>
        {/* <div className="row">Apply Now!</div> */}
        <div className="row">
          <div className="row">
            <div
              className="col-sm-4"
              style={{ marginTop: "10px", whiteSpace: "nowrap" }}
            >
              <form action="https://sfhacks2019.typeform.com/to/QU2IEE">
                <Button
                  variant="contained"
                  type="submit"
                  value="Send"
                  style={{
                    background: "#c1aad2"
                  }}
                >
                  Participant
                </Button>
              </form>
            </div>
            <div className="col-sm-4" style={{ marginTop: "10px" }}>
              <form action="https://sfhacks2019.typeform.com/to/C8yzNp">
                <Button
                  variant="contained"
                  type="submit"
                  value="Send"
                  style={{
                    background: "#c1aad2"
                  }}
                >
                  Mentors
                </Button>
              </form>
            </div>
            <div className="col-sm-4" style={{ marginTop: "10px" }}>
              <form action="https://sfhacks2019.typeform.com/to/FD63DK">
                <Button
                  variant="contained"
                  type="submit"
                  value="Send"
                  style={{
                    background: "#c1aad2"
                  }}
                >
                  Volunteers
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
