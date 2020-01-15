import React, { Component } from "react";
import FAQcard from "./helper/FAQcard";
import Fade from "react-reveal/Fade";

import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
class FAQ extends Component {
  state = {};
  render() {
    return (
      <div
        className="row align-items-center"
        style={{
          marginTop: "30px",
          overflow: "auto",
          minHeight: "100vh",
          justifyContent: "center",
          alignContent: "center"
        }}
      >
        <div style={{ marginBottom: "20px", marginTop: "20px" }}>
          <h1
            className="subheadings"
            style={{ textAlign: "center", fontSize: "xxx-large" }}
          >
            FAQ
          </h1>
        </div>
        <div
          style={{
            justifyContent: "center",
            alignContent: "center",
            padding: "25px",
            margin: "25px"
          }}
        >
          <div className="row">
            <div
              className="col-12 col-m-6 col-sm-6"
              style={{ marginBottom: "5vh" }}
            >
              <Fade big>
                <FAQcard
                  question="WHAT IS A HACKATHON"
                  text="A hackathon is where you come to learn and bring your creative ideas to life. Hundreds of hackers from across the world will gather and build something they're passionate about."
                />
              </Fade>
            </div>
            <div
              className="col-12 col-m-6 col-sm-6"
              style={{ marginBottom: "5vh" }}
            >
              <Fade big>
                <FAQcard
                  question="WHO CAN ATTEND"
                  text="We care about diversity, accessibility, and believe our differences make us better as a whole. Whether you’re a STEM major or not we want you to be here! Be prepared to learn, brainstorm, and build amazing software/hardware."
                />
              </Fade>
            </div>
            <div
              className="col-12 col-m-6 col-sm-6"
              style={{ marginBottom: "5vh" }}
            >
              <Fade big>
                <FAQcard
                  question="HOW MUCH DOES IT COST"
                  text="SF Hacks is free for all admitted participants. We’ll have WiFi, food, workshops, and awesome swag during the entire 24 hours you’ll be with us."
                />
              </Fade>
            </div>
            <div
              className="col-12 col-m-6 col-sm-6"
              style={{ marginBottom: "5vh" }}
            >
              <Fade big>
                <FAQcard
                  question="WHAT IF I DON'T HAVE A TEAM"
                  text="Hackathons are all about teamwork! If you don’t have a teammate, we’ll hold a team-formation workshop where you can meet your new best friend. Four people per team is the limit."
                />
              </Fade>
            </div>
            <div
              className="col-12 col-m-6 col-sm-6"
              style={{ marginBottom: "5vh" }}
            >
              <Fade big>
                <Card
                  style={{
                    backgroundColor: "rgba(253,253,253,0.2)",
                    color: "white",
                    minHeight: "100px"
                  }}
                >
                  <CardContent>
                    <div className="ques">WHAT IS MAJOR LEAGUE HACKING</div>
                    <div className="faqtext">
                      Major League Hacking (MLH) is the official student
                      hackathon league. SF Hacks is an official MLH Member
                      Event, so that means we follow the{" "}
                      <a
                        href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                        target="_blank" rel="noopener noreferrer"
                      >
                        MLH Code Of Conduct
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </Fade>
            </div>
            <div
              className="col-12 col-m-6 col-sm-6"
              style={{ marginBottom: "5vh" }}
            >
              <Fade big>
                <FAQcard
                  question=" WILL THERE BE ANY TRAVEL REIMBURSEMENT FOR LONG DISTANCE ATTENDEES?"
                  text="Unfortunately we will not be offering any travel reimbursement for SF Hacks 2020."
                />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FAQ;
