import {
  SEARCH_AND_SET_EXAMS,
  SET_COURSE,
  SET_PROGRAM,
  SET_RATING,
  SET_SEMESTER
} from '../actions/types';

const INTITAL_STATE_DEV = {
  course: 'BANCO DE DADOS II',
  program: 'CIÊNCIA DA COMPUTAÇÃO (BACHARELADO)/CI - João Pessoa(João Pessoa)',
  semester: '2015.2',
  rating: '4',
  exams: [
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
};

const INTITAL_STATE = {
  course: '',
  program: '',
  semester: '',
  rating: '',
  exams: []
};

export default (state = INTITAL_STATE_DEV, action) => {
  switch(action.type) {
    case SEARCH_AND_SET_EXAMS:
      console.log(`ACTION: ${SEARCH_AND_SET_EXAMS} PAYLOAD: ${action.payload}`);
      return { ...state, exams: action.payload };
    case SET_COURSE:
      console.log(`ACTION: ${SET_COURSE} PAYLOAD: ${action.payload}`);
      return { ...state, course: action.payload };
    case SET_PROGRAM:
      console.log(`ACTION: ${SET_PROGRAM} PAYLOAD: ${action.payload}`);
      return { ...state, program: action.payload };
    case SET_RATING:
      console.log(`ACTION: ${SET_RATING} PAYLOAD: ${action.payload}`);
      return { ...state, rating: action.payload };
    case SET_SEMESTER:
      console.log(`ACTION: ${SET_SEMESTER} PAYLOAD: ${action.payload}`);
      return { ...state, semester: action.payload };
    default:
      return state;
  }
};