import React, { Component } from "react";
class Home extends Component {
  state = {};
  render() {
    const SFHACKS = "< SF Hacks >";
    return (
      <div className="flex">
        <img src="./../assets/Logo.png" alt="Logo" className="logo2" />

        <h1 className="rainbow">{SFHACKS}</h1>

        <p className="place">
          San Francisco State University | San Francisco, California
        </p>

        <p className="date">March 28 - 29 2020</p>

        <a href="https://docs.google.com/forms/d/e/1FAIpQLSe9zzNrad2Uxfu-GhZRjw1Ru9YdkxdMSGp9UCGTPG00fGZrXw/viewform?usp=sf_link">
          <input
            type="button"
            onclick=""
            className="button"
            id="submit"
            value="Receive Notifications"
          />
        </a>
      </div>
    );
  }
}

export default Home;
