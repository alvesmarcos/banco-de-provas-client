/**
 * Sincronização com Banco de Provas API 
 */
import ClientApi from './client-api';

const bancoApi = { url: 'http://dadossigaaufpb.herokuapp.com/api/v1', contentType: 'application/json' };

export const syncDownloadCursos = async() => {
  const clientApi = new ClientApi(bancoApi.url, bancoApi.contentType);

  return await clientApi.get('/cursos');
};

export const syncDownloadDisciplinas = async() => {
  const clientApi = new ClientApi(bancoApi.url, bancoApi.contentType);

  return await clientApi.get('/disciplinas');
};

export const syncDownloadPeriodos = async() => {
  const clientApi = new ClientApi(bancoApi.url, bancoApi.contentType);

  return await clientApi.get('/periodos');
};
