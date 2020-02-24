import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";

const pulseAnimation = keyframes`${pulse}`;

const PulseDiv = styled.div`
  animation: 3s ${pulseAnimation};
`;

class Home extends Component {
  render() {
    const SFHACKS = "SF Hacks";

    return (
      <div className="flex" style={{ overflow: "auto", minHeight: "100vh" }}>
        <img src="./../assets/logo.png" alt="Logo" className="logo2" />

        <PulseDiv>
          <h1 className="sfhacksheading" style={{ fontSize: "xxx-large" }}>
            {SFHACKS}
          </h1>
        </PulseDiv>

        <p className="place">
          San Francisco State University
          <br /> Student Activities and Events Center (Annex I)
          <br /> San Francisco, California
        </p>

        <p className="date">
          March 28 - 29<sup>th</sup>, 2020
        </p>
        <p className="place">
          Application deadline: Mar 15<sup>th</sup>, 2020
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
                    background: "rgba(253, 223, 179, 0.8)"
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
                    background: "rgba(253, 223, 179, 0.8)"
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
                    background: "rgba(253, 223, 179, 0.8)"
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
