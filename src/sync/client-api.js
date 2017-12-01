import request from 'superagent';

class ClientApi {
  constructor(url, contentType) {
    this.url = url;
    this.contentType = contentType;
  }

  async get(endpoint='') {
    return await request.get(`${this.url}${endpoint}`)
      .query(null)
      .set({ Accept: 'application/json' })
      .then(res => {
        return res.body;
      }, err => {
        console.log(err);
      });
  }

  async post(endpoint='') {
    // TODO
  }

  async put(endpoint='') {
    // TODO
  }

  async delete(endpoint='') {
    // TODO
  }
}

export default ClientApi;