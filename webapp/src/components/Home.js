import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import Button from "@material-ui/core/Button";
import styled, { keyframes } from "styled-components";
import { pulse } from "react-animations";

const pulseAnimation = keyframes`${pulse}`;

const PulseDiv = styled.div`
  animation: 3s ${pulseAnimation};
`;

class Home extends Component {
  state = { modal: true };
  render() {
    const SFHACKS = "SF Hacks";
    const modaltoggle = () => {
      this.setState({ modal: !this.state.modal });
    };
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

        <p className="date">Date: TBD</p>
        {/* <p className="place">
          Application deadline: Mar 15<sup>th</sup>, 2020
        </p> */}
        {/* <div className="row">Apply Now!</div> */}
        <div className="row">
          <Button
            variant="contained"
            style={{
              background: "rgba(253, 223, 179, 0.8)"
            }}
            onClick={modaltoggle}
          >
            Notice
          </Button>
          {/* <div className="row">
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
          </div> */}
        </div>
        <Modal
          isOpen={this.state.modal}
          toggle={modaltoggle}
          backdrop="false"
          style={{
            width: "80vw",
            maxWidth: "80vw",
            top: "15vh",
            background: "rgba(100, 44, 143, 1)",
            borderRadius: "20px"
          }}
        >
          <ModalHeader
            toggle={modaltoggle}
            style={{ background: "rgba(100, 44, 143, 1)", color: "#fbaf40" }}
          >
            Notice
          </ModalHeader>
          <ModalBody style={{ background: "#b295c7" }}>
            {/* {"Dear Hacker,\nWe hope you are doing well!\nIn light of the COVID- 19, the San Francisco State University administration has decided to postpone all on-campus events, including SF Hacks 2020, for the time being. Our leadership team has worked extremely hard all year to bring SF Hacks 2020 to life, so this does come as a major disappointment for all of us. However, we do acknowledge that our event attracts 600 students from all over the country, and that this is the best decision for the safety and well-being of all parties involved, as that is our first and highest priority.That being said, although we have to cancel SF Hacks for end of March,we plan to reschedule the event to a later date. Please stay tuned forupdates. We will reach out to you once it is safe to travel again and wemanage to find an alternate date. SF Hacks 2020 will happen!\nWe understand that many students may have made travel arrangements in planning to attend this event. Many airlines have offered free cancellations in light of the current situation and we hope this will not cause you any inconvenience. Please feel free to reach out to the SF Hacks team at sfhacksteam@gmail.com with any questions. Thank you for your understanding, and stay safe!\nBest,\nSF Hacks \n"} */}
            Dear Hacker, <br />
            <br />
            We hope you are doing well!
            <br /> In light of the COVID- 19, the San Francisco State University
            administration has decided to postpone all on-campus events,
            including SF Hacks 2020, for the time being. Our leadership team has
            worked extremely hard all year to bring SF Hacks 2020 to life, so
            this does come as a major disappointment for all of us. However, we
            do acknowledge that our event attracts 600 students from all over
            the country, and that this is the best decision for the safety and
            well-being of all parties involved, as that is our first and highest
            priority.
            <br /> That being said, although we have to cancel SF Hacks for end
            of March, we plan to reschedule the event to a later date. Please
            stay tuned for updates. We will reach out to you once it is safe to
            travel again and we manage to find an alternate date. SF Hacks 2020
            will happen!
            <br /> We understand that many students may have made travel
            arrangements in planning to attend this event. Many airlines have
            offered free cancellations in light of the current situation and we
            hope this will not cause you any inconvenience. Please feel free to
            reach out to the SF Hacks team at sfhacksteam@gmail.com with any
            questions. Thank you for your understanding, and stay safe!
            <br />
            <br /> Best,
            <br /> SF Hacks
          </ModalBody>
          {/* <ModalFooter>
            <Button color="primary" onClick={modaltoggle}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={modaltoggle}>
              Cancel
            </Button>
          </ModalFooter> */}
        </Modal>
      </div>
    );
  }
}

export default Home;
