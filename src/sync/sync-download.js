/**
 * Sincronização com Banco de Provas API 
 */
import ClientApi from './client-api';

const bancoApi = { url: 'http://localhost:8000/api/v1', contentType: 'application/json' };

export const syncCursos = async() => {
  const clientApi = new ClientApi(bancoApi.url, bancoApi.contentType);

  return await clientApi.get('/cursos/');
};

export const syncDisciplinas = async() => {
  const clientApi = new ClientApi(bancoApi.url, bancoApi.contentType);

  return await clientApi.get('/disciplinas/');
};

export const syncPeriodos = async() => {
  const clientApi = new ClientApi(bancoApi.url, bancoApi.contentType);

  return await clientApi.get('/periodos/');
};

export const syncProvas = async() => {
  const clientApi = new ClientApi(bancoApi.url, bancoApi.contentType);
  
  return await clientApi.get(`/provas/`);
};

export const getProvasWithQuery = async(query) => {
  const clientApi = new ClientApi(bancoApi.url, bancoApi.contentType);

  return await clientApi.get(`/provas/${query}`);
};

