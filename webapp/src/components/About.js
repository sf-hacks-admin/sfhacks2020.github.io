import React, { Component } from "react";

class About extends Component {
  componentDidMount = () => {
    if (window.innerWidth <= 500) {
      this.setState({ abouttext: "SFHACKS ABOUT HERE" });
    }
  };
  state = {
    abouttext: ` SF Hacks is an entirely student run, student driven hackathon that
  hosts over 500 of California’s most talented collegiate engineers,
  designers, and developers in a 24-hour hackathon. At SF Hacks,
  students are given the oppurtunity to create, learn, and
  experiment. Students are encouraged to create websites, mobile
  apps, games, and more. This is where we will turn cutting-edge
  ideas into reality.`
  };

  render() {
    return (
      <div className="team-image-bg body-color col ">
        <div
          className="flex"
          style={{ padding: "0.5vw", height: "100vh", minHeight: "400px" }}
        >
          <article className="about">
            <h2 className="h2"> Who Are We?</h2>

            <div className="aboutp">{this.state.abouttext}</div>
          </article>
        </div>
      </div>
    );
  }
}

export default About;
