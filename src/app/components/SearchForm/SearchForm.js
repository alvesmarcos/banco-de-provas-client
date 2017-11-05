import React, { Component } from "react";
import Paper from "material-ui/Paper";
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

export default class SearchForm extends Component {
  render() {
    return (
      <Paper square="true">
        <Typography type="display1" align="center">
          SearchForm
      </Typography>
      </Paper>
    );
  }
}
