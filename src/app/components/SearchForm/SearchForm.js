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
  setCourse,
  setProgram,
  setRating,
  setSemester,
  searchAndSetExams
} from '../../../actions/homeAction';
import {
  syncDownloadCursos,
  syncDownloadPeriodos,
  syncDownloadDisciplinas
} from '../../../sync/sync-download';

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
    syncDownloadDisciplinas().then(res => {
      try {
        const disciplinas = res.map((disciplina) => ({ id: disciplina.id, value: disciplina.nome, label: disciplina.nome }));
        this.setState({ disciplinas });
      } catch(e) {
        console.log(e);
      }
    }); 
  }
  
  getPeriodos() {
    syncDownloadPeriodos().then(res => {
      try {
        const periodos = res.map((periodo) => ({ id: periodo.id, value: periodo.semestre, label: periodo.semestre }));
        this.setState({ periodos });
      } catch(e) {
        console.log(e);
      }
    }); 
  }

  getCursos() {
    syncDownloadCursos().then(res => {
      try {
        const cursos = res.map((curso) => ({ id: curso.id, value: curso.nome, label: curso.nome }));
        this.setState({ cursos });
      } catch(e) {
        console.log(e);
      }
    });
  }

  componentDidMount() {
    this.getCursos()
    this.getPeriodos()
    this.getDisciplinas();
  }

  handleChangeCourse(event) {
    this.props.setCourse(event.target.value);
  }

  handleChangeProgram(event) {
    this.props.setProgram(event.target.value);
  }

  handleChangeRating(event) {
    this.props.setRating(event.target.value);
  }

  handleChangeSemester(event) {
    this.props.setSemester(event.target.value);
  }

  render() {
    return (
      <div className={this.props.classes.root}>

        <Grid container alignItems="center" justify="center">
          <Grid item xs={12} sm={9}>
            <Paper square="true">
              <Selector
                id="search-bar"
                value={this.props.course}
                onChange={this.handleChangeCourse.bind(this)}
                helperText="Escolha uma disciplina"
                list={this.state.cursos}
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
                value={this.props.program}
                onChange={this.handleChangeProgram.bind(this)}
                list={this.state.cursos}
                helperText="Escolha um curso"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Paper square="true">
              <Selector
                id="periodo" 
                value={this.props.semester}
                onChange={this.handleChangeSemester.bind(this)}
                list={this.state.periodos}
                helperText="Escolha um periodo"
              />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={2}>
            <Paper square="true">
              <Selector
                id="classificacao" 
                value={this.props.rating}
                onChange={this.handleChangeRating.bind(this)}
                list={classificacoes}
                helperText="Escolha uma classificacao"
              />
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

const mapStateToProps = (state) => ({
  course: state.homeReducer.course,
  program: state.homeReducer.program,
  rating: state.homeReducer.rating,
  semester: state.homeReducer.semester
});

SearchForm = connect(mapStateToProps, 
  {setCourse, setProgram, setRating, setSemester, searchAndSetExams})(SearchForm);

export default withStyles(styles)(SearchForm);