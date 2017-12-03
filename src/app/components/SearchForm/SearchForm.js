import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { grey } from 'material-ui/colors';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import SearchIcon from 'material-ui-icons/Search';
import Selector from '../Selector/Selector';
import {
  setDisciplina,
  setCurso,
  setClassificacao,
  setPeriodo,
  searchAndSetProvas
} from '../../../actions/homeAction';
import {
  syncCursos,
  syncPeriodos,
  syncDisciplinas
} from '../../../sync/sync-download';

let filters = '';

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
    this.state = {
      cursos: [],
      periodos: [],
      disciplinas: []
    }
  }
  
  getDisciplinas() {
    syncDisciplinas()
      .then(res => {
        const disciplinas = res.map((disciplina) => ({ id: disciplina.id, value: disciplina.id, label: disciplina.nome }));
        this.setState({ disciplinas });
      }).catch(err => {
        console.log(err);
      }); 
  }
  
  getPeriodos() {
    syncPeriodos()
      .then(res => {
        const periodos = res.map((periodo) => ({ id: periodo.id, value: periodo.id, label: periodo.semestre }));
        this.setState({ periodos });
      }).catch(err => {
        console.log(err);
      }); 
  }

  getCursos() {
    syncCursos()
      .then(res => {
        const cursos = res.map((curso) => ({ id: curso.id, value: curso.id, label: curso.nome }));
        this.setState({ cursos });
      }).catch(err => {
      console.log(err);
    });
  }

  componentDidMount() {
    this.getCursos()
    this.getPeriodos()
    this.getDisciplinas();
  }

  handleChangeDisciplina(event) {
    this.props.setDisciplina(event.target.value);
  }

  handleChangeCurso(event) {
    this.props.setCurso(event.target.value);
  }

  handleChangeClassificacao(event) {
    this.props.setClassificacao(event.target.value);
  }

  handleChangePeriodo(event) {
    this.props.setPeriodo(event.target.value);
  }

  buildFilter(attr, searchBy) {
    if(attr) {
      let concatenationOrFirst = '?';
      if (filters) {
        concatenationOrFirst = '&';
      }
      filters += `${concatenationOrFirst}${searchBy}=${attr}`;
    }
  }

  onClickSearch() {
    filters = '';
    this.buildFilter(this.props.disciplina, 'disciplina');
    this.buildFilter(this.props.curso, 'curso');
    this.buildFilter(this.props.periodo, 'periodo');
    this.buildFilter(this.props.classificacao, 'classificacao');

    this.props.searchAndSetProvas(filters);
  }

  render() {
    return (
      <div className={this.props.classes.root}>

        <Grid container alignItems="center" justify="center">
          <Grid item xs={12} sm={9}>
            <Paper square="true">
              <Selector
                id="search-bar"
                value={this.props.disciplina}
                onChange={this.handleChangeDisciplina.bind(this)}
                helperText="Escolha uma disciplina"
                list={this.state.disciplinas}
                fullWidth
              />

            </Paper>
          </Grid>


        </Grid>

        <Grid container alignItems="center" justify="center">
          <Grid item xs={12} sm={4}>
            <Paper square="true">
              <Selector 
                id="curso" 
                value={this.props.curso}
                onChange={this.handleChangeCurso.bind(this)}
                list={this.state.cursos}
                helperText="Escolha um curso"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Paper square="true">
              <Selector
                id="periodo" 
                value={this.props.periodo}
                onChange={this.handleChangePeriodo.bind(this)}
                list={this.state.periodos}
                helperText="Escolha um periodo"
              />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={2}>
            <Paper square="true">
              <Selector
                id="classificacao" 
                value={this.props.classificacao}
                onChange={this.handleChangeClassificacao.bind(this)}
                list={classificacoes}
                helperText="Escolha uma classificacao"
              />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={1}>
            <Typography align="center">
              <Button
                onClick={this.onClickSearch.bind(this)}
                className={this.props.classes.button}>
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

const mapStateToProps = (state) => ({
  disciplina: state.homeReducer.disciplina,
  curso: state.homeReducer.curso,
  classificacao: state.homeReducer.classificacao,
  periodo: state.homeReducer.periodo
});

SearchForm = connect(mapStateToProps, 
  {setDisciplina, setCurso, setClassificacao, setPeriodo, searchAndSetProvas})(SearchForm);

export default withStyles(styles)(SearchForm);