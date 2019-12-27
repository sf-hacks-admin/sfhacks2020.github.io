import React, { Component } from "react";
class About extends Component {
  state = {};
  render() {
    return (
      <div className="team-image-bg body-color  ">
        <div className="flex">
          <article className="about">
            <h2 className="h2"> Who Are We?</h2>

            <div className="aboutp">
              SF Hacks is an entirely student run, student driven hackathon that
              hosts over 500 of California’s most talented collegiate engineers,
              designers, and developers in a 24-hour hackathon. At SF Hacks,
              students are given the oppurtunity to create, learn, and
              experiment. Students are encouraged to create websites, mobile
              apps, games, and more. This is where we will turn cutting-edge
              ideas into reality.
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default About;
