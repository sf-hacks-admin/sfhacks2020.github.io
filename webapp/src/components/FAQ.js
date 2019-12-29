import React, { Component } from "react";
import FAQcard from "./helper/FAQcard";
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
          <h1 className="h1" style={{ textAlign: "center" }}>
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
            <FAQcard
              question="WHAT IS A HACKATHON"
              text="A hackathon is where you come to learn and bring your creative ideas to life. Hundreds of hackers from across the world will gather and build something they're passionate about."
            />
            <FAQcard
              question="WHO CAN ATTEND"
              text="We care about diversity, accessibility, and believe our differences make us better as a whole. Whether you’re a STEM major or not we want you to be here! Be prepared to learn, brainstorm, and build amazing software/hardware."
            />
            <FAQcard
              question="HOW MUCH DOES IT COST"
              text="SF Hacks is free for all admitted participants. We’ll have WiFi, food, workshops, and awesome swag during the entire 24 hours you’ll be with us."
            />
            <FAQcard
              question="WHAT IF I DON'T HAVE A TEAM"
              text="Hackathons are all about teamwork! If you don’t have a teammate, we’ll hold a team-formation workshop where you can meet your new best friend. Four people per team is the limit."
            />
            <FAQcard
              question="WHAT IS MAJOR LEAGUE HACKING"
              text="Major League Hacking (MLH) is the official student hackathon league. SF Hacks is an official MLH Member Event, so that means we follow the MLH Code Of Conduct."
            />
            <FAQcard
              question=" WILL THERE BE ANY TRAVEL REIMBURSEMENT FOR LONG DISTANCE ATTENDEES?"
              text="Unfortunately we will not be offering any travel reimbursement for SF Hacks 2020."
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FAQ;
