import {
  SEARCH_AND_SET_PROVAS,
  SET_DISCIPLINA,
  SET_CURSO,
  SET_CLASSIFICACAO,
  SET_PERIODO
} from '../actions/types';

const INTITAL_STATE_DEV = {
  disciplina: 'BANCO DE DADOS II',
  curso: 'CIÊNCIA DA COMPUTAÇÃO (BACHARELADO)/CI - João Pessoa(João Pessoa)',
  periodo: '2015.2',
  classificacao: '4',
  provas: [
    {
      miniatura: "http://ditainprint.com/wp-content/uploads/2013/10/pdf-thumbnail.png",
      disciplina: "Banco de Dados II",
      periodo: "2014.2",
      data_upload: "05 de Agosto de 2016",
      classificacao: "2",
      pdf: "http://www.cespe.unb.br/concursos/DPRF_13/arquivos/DPRF13_001_01.pdf"
    },
    {
      disciplina: "Interação Homem-Máquina",
      periodo: "2016.1",
      data_upload: "12 de Abril de 2017",
      classificacao: "5"
    },
    {
      disciplina: "Computação Pervasiva",
      periodo: "2017.1",
      data_upload: "11 de Novembro de 2017",
      classificacao: "1"
    },
    {
      disciplina: "Interação Homem-Máquina",
      periodo: "2017.1",
      data_upload: "08 de Abril de 2017",
      classificacao: "10"
    },
    {
      disciplina: "Cálculo III",
      periodo: "2014.1",
      data_upload: "27 de Dezembro de 2015",
      classificacao: "20"
    },
    {
      disciplina: "Séries e EDO",
      periodo: "2015.2",
      data_upload: "04 de Dezembro de 2016",
      classificacao: "5"
    },
    {
      disciplina: "Introdução à Computação Gráfica",
      periodo: "2016.2",
      data_upload: "11 de Julho de 2017",
      classificacao: "8"
    },
    {
      disciplina: "Métodos e Projeto de Software",
      periodo: "2016.1",
      data_upload: "16 de Janeiro de 2017",
      classificacao: "3"
    },
  ]
};

const INTITAL_STATE = {
  disciplina: '',
  curso: '',
  periodo: '',
  classificacao: '',
  provas: []
};

export default (state = INTITAL_STATE, action) => {
  switch(action.type) {
    case SEARCH_AND_SET_PROVAS:
      console.log(`ACTION: ${SEARCH_AND_SET_PROVAS} PAYLOAD: ${action.payload}`);
      return { ...state, provas: action.payload };
    case SET_DISCIPLINA:
      console.log(`ACTION: ${SET_DISCIPLINA} PAYLOAD: ${action.payload}`);
      return { ...state, disciplina: action.payload };
    case SET_CURSO:
      console.log(`ACTION: ${SET_CURSO} PAYLOAD: ${action.payload}`);
      return { ...state, curso: action.payload };
    case SET_CLASSIFICACAO:
      console.log(`ACTION: ${SET_CLASSIFICACAO} PAYLOAD: ${action.payload}`);
      return { ...state, classificacao: action.payload };
    case SET_PERIODO:
      console.log(`ACTION: ${SET_PERIODO} PAYLOAD: ${action.payload}`);
      return { ...state, periodo: action.payload };
    default:
      return state;
  }
};