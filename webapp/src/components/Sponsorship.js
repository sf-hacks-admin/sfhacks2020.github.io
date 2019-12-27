import React, { Component } from "react";
class Sponsorship extends Component {
  state = {};
  render() {
    return (
      <div className="body-color  ">
        <div className="flex">
          <img className="sponsors" src="./../assets/Sponsors.png" />

          <p className="h1spo">
            Interested in sponsoring? E-mail us at
            <a href="mailto:sfhacksteam@gmail.com" target="_blank">
              sfhacksteam@gmail.com
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Sponsorship;
