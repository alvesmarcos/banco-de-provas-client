import React, { Component } from "react";
import Paper from "material-ui/Paper";
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { grey } from 'material-ui/colors';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid'
import Selector from '../Selector/Selector';
import Button from 'material-ui/Button';
import SearchIcon from 'material-ui-icons/Search'

const cursos = [
  { id: "1626669", value: "CIÊNCIA DA COMPUTAÇÃO (BACHARELADO)/CI - João Pessoa(João Pessoa)", label: "CIÊNCIA DA COMPUTAÇÃO (BACHARELADO)/CI - João Pessoa(João Pessoa)" },
  { id: "1626865", value: "ENGENHARIA DE COMPUTAÇÃO/CI - João Pessoa(João Pessoa)", label: "ENGENHARIA DE COMPUTAÇÃO/CI - João Pessoa(João Pessoa)" },
  { id: "1626769", value: "MATEMÁTICA COMPUTACIONAL (BACH)/CI - João Pessoa(João Pessoa)", label: "MATEMÁTICA COMPUTACIONAL (BACH)/CI - João Pessoa(João Pessoa)" }
]

const periodos = [
  { id: "2014.1", value: "2014.1", label: "2014.1" },
  { id: "2014.2", value: "2014.2", label: "2014.2" },
  { id: "2015.1", value: "2015.1", label: "2015.1" },
  { id: "2015.2", value: "2015.2", label: "2015.2" },
  { id: "2016.1", value: "2016.1", label: "2016.1" },
  { id: "2016.2", value: "2016.2", label: "2016.2" },
  { id: "2017.1", value: "2017.1", label: "2017.1" },
]

const classificacoes = [
  { id: "0", value: "0", label: "0+" },
  { id: "1", value: "1", label: "1+" },
  { id: "2", value: "2", label: "2+" },
  { id: "3", value: "3", label: "3+" },
  { id: "4", value: "4", label: "4+" },
  { id: "5", value: "5", label: "5+" },
  { id: "6", value: "6", label: "6+" },
  { id: "7", value: "7", label: "7+" },
  { id: "8", value: "8", label: "8+" },
  { id: "9", value: "9", label: "9+" }
]


const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 50,
    paddingBottom: 50,
    background: grey[900]
  }),
  searchBar: {
    paddingLeft: 20,
    paddingRight: 20
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '12px 30px',
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
});

class SearchForm extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.classes.root}>

        <Grid container alignItems="center" justify="center">
          <Grid item xs={12} sm={9}>
            <Paper square="true" className={this.props.classes.searchBar}>
              <TextField
                id="search-bar"
                InputLabelProps={{
                  shrink: true,
                }}
                helperText="Digite a disciplina"
                fullWidth
                margin="normal"
              />

            </Paper>
          </Grid>


        </Grid>

        <Grid container alignItems="center" justify="center">
          <Grid item xs={12} sm={4}>
            <Paper square="true">
              <Selector list={cursos} helperText="Escolha um curso" id="curso" />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Paper square="true">
              <Selector list={periodos} helperText="Escolha um periodo" id="periodo" />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={2}>
            <Paper square="true">
              <Selector list={classificacoes} helperText="Escolha uma classificacao" id="classificacao" />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={1}>
            <Typography align="center">
              <Button className={this.props.classes.button}>
                <SearchIcon />
              </Button>
            </Typography>
          </Grid>
        </Grid>
        {/* <Grid container alignItems="center" justify="center">
          <Grid item xs={12} sm={3}>
            <Button className={this.props.classes.button} fullWidth>
              <SearchIcon className={this.props.classes.leftIcon}/>
              Pesquisar
            </Button>
          </Grid>
        </Grid> */}
      </div>
    );
  }
}

export default withStyles(styles)(SearchForm);