import React, { Component } from "react";
import Paper from "material-ui/Paper";
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { grey } from 'material-ui/colors';
import Heart from 'material-ui-icons/Favorite';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button'


const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 24,
    paddingBottom: 24,
    background: grey[900]
  }),
  headline: theme.mixins.gutters({
    fontSize: "3em"
  }),
  button: {
    marginTop: "1em",
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '12px 30px',
  },
});

class Hero extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Paper square="true" className={this.props.classes.root}>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={4}>
              <img src="https://image.flaticon.com/icons/svg/556/556089.svg" />
            </Grid>
          </Grid>
          <Typography className={this.props.classes.headline} align="center">
            FINALMENTE CHEGOU
        </Typography>
          <Typography type="title" align="center">
            O pimeiro banco de provas colaborativo da UFPB <Heart />
          </Typography>
          <Typography align="center">
            <Button raised className={this.props.classes.button}>
              Pesquisar
        </Button>
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Hero);