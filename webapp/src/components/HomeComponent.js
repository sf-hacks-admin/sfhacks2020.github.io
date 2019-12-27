import React, { Component } from "react";
import { Grid, Container } from "@material-ui/core";
// import Grid from "@material-ui/core/Grid";
class HomeComponent extends Component {
  state = {};
  render() {
    const SFHACKS = "< SF Hacks >";
    return (
      <div className="container homebody">
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs={12} sm={6}>
            <h1>
              <h1 className="rainbow">{SFHACKS}</h1>
            </h1>
          </Grid>
          <Grid item xs={12} sm={6}>
            <p className="place">
              San Francisco State University | San Francisco, California
            </p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default HomeComponent;
