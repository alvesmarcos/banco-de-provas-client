import {
  SEARCH_AND_SET_PROVAS,
  SET_DISCIPLINA,
  SET_CURSO,
  SET_CLASSIFICACAO,
  SET_PERIODO
} from './types';
import moment from 'moment';
import { getProvasWithQuery } from '../sync/sync-download';

export const setDisciplina = (field) => ({
  type: SET_DISCIPLINA,
  payload: field
});

export const setCurso = (field) => ({
  type: SET_CURSO,
  payload: field
});

export const setClassificacao = (field) => ({
  type: SET_CLASSIFICACAO,
  payload: field
});

export const setPeriodo = (field) => ({
  type: SET_PERIODO,
  payload: field
});

export const searchAndSetProvas = (filter) => (dispatch) => {
  getProvasWithQuery(filter)
    .then(res => {
      return searchHelper(dispatch, res);
    }).catch(err => console.log(err)); 
};

const searchHelper = (dispatch, fields) => {
  let provas = fields.map(prova => ({
    miniatura: prova.miniatura,
    pdf: prova.pdf,
    data_upload: moment(new Date(prova.data_upload)).format('LL'),
    classificacao: prova.classificacao,
    periodo: prova.periodo.semestre,
    disciplina: prova.disciplina.nome
  }));

  dispatch({ type: SEARCH_AND_SET_PROVAS, payload: provas });
};
