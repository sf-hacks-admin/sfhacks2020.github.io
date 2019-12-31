import React, { Component } from "react";

import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

class FAQcard extends Component {
  state = {};
  render() {
    return (
      <Card
        style={{ backgroundColor: "rgba(253,253,253,0.2)", color: "white" }}
      >
        <CardContent>
          <div className="ques">{this.props.question}</div>
          <div className="faqtext">{this.props.text}</div>
        </CardContent>
      </Card>
    );
  }
}

export default FAQcard;
// <div className="col-4">
//   <p className="ques">{this.props.question}</p>

//   <div className="overlay">
//     <div className="faqtext">{this.props.text}</div>
//   </div>
