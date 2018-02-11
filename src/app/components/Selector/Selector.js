import React, { Component } from "react";
import Paper from "material-ui/Paper";
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { grey } from 'material-ui/colors';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid'
import MenuItem from 'material-ui/Menu/MenuItem';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingLeft: 10,
    paddingRight: 10
  }),
  menu: {
    width: 200,
  },
  
});

class Selector extends Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        <TextField
          id={this.props.id}
          select
          className={this.props.classes.textField}
          value={this.props.value}
          onChange={this.props.onChange}
          helperText={this.props.helperText}
          margin="normal"
          fullWidth = "true"
        >
          {this.props.list.map(option => (
            <MenuItem key={option.id} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    );
  }
}

export default withStyles(styles)(Selector);