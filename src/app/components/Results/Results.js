import React, { Component } from "react";
import Paper from "material-ui/Paper";
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { grey } from 'material-ui/colors';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 24,
    paddingBottom: 24,
    background: grey[900]
  }),
});

class Results extends Component {
  constructor(props) {
    super(props);
  }
    
  render() {
    return (
      <Paper square="true" className={this.props.classes.root}>
        <Typography type="display1" align="center">
          Results
        </Typography>
      </Paper>
    );
  }
}

export default withStyles(styles)(Results);