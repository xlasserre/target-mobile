import { API_URL } from '../constants/constants';

const handleErrors = (response) => {
  return new Promise((resolve, reject) => {
    if (!response) {
      reject({ error: 'No response returned from fetch' });
      return;
    }

    if (response.ok) {
      resolve(response);
      return;
    }

    response.json()
      .then((json) => {
        const error = json || { error: response.statusText };
        reject(error);
      }).catch(() => reject({ error: 'Response not JSON' }));
  });
};

class Api {
  static makeRequest(uri, requestData = {}) {
    const url = API_URL + uri;

    return new Promise((resolve, reject) => {
      fetch(url, requestData)
        .then(handleErrors)
        .then((response) => { resolve(response.json()); })
        .catch((err) => { reject(err); });
    });
  }

  static post(uri, data) {
    const requestData = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json'
      },
      body: JSON.stringify(data)
    };
    return this.makeRequest(uri, requestData);
  }
}

export default Api;
