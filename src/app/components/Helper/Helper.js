import React, { Component } from "react";
import Paper from "material-ui/Paper";
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import { grey } from 'material-ui/colors';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 50,
    paddingBottom: 50,
  }),

});

class Helper extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          <Stepper className={this.props.classes.root}  alternativeLabel>
            <Step>
              <StepLabel>Insira o nome da disciplina</StepLabel>
            </Step>
            <Step>
              <StepLabel>Escolha os filtros</StepLabel>
            </Step>
            <Step>
              <StepLabel>Faça o download</StepLabel>
            </Step>
            <Step>
              <StepLabel>Avalie!</StepLabel>
            </Step>
          </Stepper>
      </div>
    );
  }
}
export default withStyles(styles)(Helper);