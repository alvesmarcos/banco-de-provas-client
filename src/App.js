import React, { Component } from "react";
import { Header, Results, Footer, Hero, SearchForm,Helper } from "./app/components";
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';


const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});


const exams = [
  {
    thumbnail: "http://ditainprint.com/wp-content/uploads/2013/10/pdf-thumbnail.png",
    name: "Banco de Dados II",
    period: "2014.2",
    dateUpload: "05 de Agosto de 2016",
    rating: "2",
    pdflink: "http://www.cespe.unb.br/concursos/DPRF_13/arquivos/DPRF13_001_01.pdf"
  },
  {
    name: "Interação Homem-Máquina",
    period: "2016.1",
    dateUpload: "12 de Abril de 2017",
    rating: "5"
  },
  {
    name: "Computação Pervasiva",
    period: "2017.1",
    dateUpload: "11 de Novembro de 2017",
    rating: "1"
  },
  {
    name: "Interação Homem-Máquina",
    period: "2017.1",
    dateUpload: "08 de Abril de 2017",
    rating: "10"
  },
  {
    name: "Cálculo III",
    period: "2014.1",
    dateUpload: "27 de Dezembro de 2015",
    rating: "20"
  },
  {
    name: "Séries e EDO",
    period: "2015.2",
    dateUpload: "04 de Dezembro de 2016",
    rating: "5"
  },
  {
    name: "Introdução à Computação Gráfica",
    period: "2016.2",
    dateUpload: "11 de Julho de 2017",
    rating: "8"
  },
  {
    name: "Métodos e Projeto de Software",
    period: "2016.1",
    dateUpload: "16 de Janeiro de 2017",
    rating: "3"
  },
]


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Header />
          <Hero />
          <Helper />
          <SearchForm />
          <Results exams={exams}/>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
