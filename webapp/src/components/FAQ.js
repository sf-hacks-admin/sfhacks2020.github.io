import React, { Component } from "react";

class FAQ extends Component {
  state = {};
  render() {
    return (
      <div className="body-color  ">
        <h1 className="faqh1"> FAQ</h1>

        <ul className=" faqflex">
          <div className="faqcontainer">
            <p className="ques">WHAT IS A HACKATHON</p>

            <div className="overlay">
              <div className="faqtext">
                A hackathon is where you come to learn and bring your creative
                ideas to life. Hundreds of hackers from across the world will
                gather and build something they're passionate about.
              </div>
            </div>
          </div>

          <div className="faqcontainer">
            <p className="ques">WHO CAN ATTEND</p>

            <div className="overlay">
              <div className="faqtext">
                We care about diversity, accessibility, and believe our
                differences make us better as a whole. Whether you’re a STEM
                major or not we want you to be here! Be prepared to learn,
                brainstorm, and build amazing software/hardware.
              </div>
            </div>
          </div>

          <div className="faqcontainer">
            <p className="ques">HOW MUCH DOES IT COST</p>

            <div className="overlay">
              <div className="faqtext">
                SF Hacks is free for all admitted participants. We’ll have WiFi,
                food, workshops, and awesome swag during the entire 24 hours
                you’ll be with us.
              </div>
            </div>
          </div>

          <div className="faqcontainer">
            <p className="ques">WHAT IF I DON'T HAVE A TEAM</p>
            <div className="overlay">
              <div className="faqtext">
                Hackathons are all about teamwork! If you don’t have a teammate,
                we’ll hold a team-formation workshop where you can meet your new
                best friend. Four people per team is the limit.
              </div>
            </div>
          </div>

          <div className="faqcontainer">
            <p className="ques">WHAT IS MAJOR LEAGUE HACKING</p>

            <div className="overlay">
              <div className="faqtext">
                Major League Hacking (MLH) is the official student hackathon
                league. SF Hacks is an official MLH Member Event, so that means
                we follow the MLH Code Of Conduct.
              </div>
            </div>
          </div>

          <div className="faqcontainer">
            <p className="ques">
              WILL THERE BE ANY TRAVEL REIMBURSEMENT FOR LONG DISTANCE
              ATTENDEES?
            </p>

            <div className="overlay">
              <div className="faqtext">
                Unfortunately we will not be offering any travel reimbursement
                for SF Hacks 2020.
              </div>
            </div>
          </div>
        </ul>
      </div>
    );
  }
}

export default FAQ;
