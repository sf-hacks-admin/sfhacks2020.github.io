import React, { Component } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class FAQcard extends Component {
  state = {};
  render() {
    return (
      <div className="col-12 col-m-6 col-sm-6" style={{ marginBottom: "5vh" }}>
        <Card style={{ backgroundColor: "rgba(253,253,253,0.2)" }}>
          <CardContent>
            <div className="ques">{this.props.question}</div>
            <div className="faqtext">{this.props.text}</div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default FAQcard;
// <div className="col-4">
//   <p className="ques">{this.props.question}</p>

//   <div className="overlay">
//     <div className="faqtext">{this.props.text}</div>
//   </div>
