import { API_URL } from '../constants/constants';

const handleErrors = (response) => {
  return new Promise((resolve, reject) => {
    if (!response) {
      reject({ message: 'No response returned from fetch' });
      return;
    }

    if (response.ok) {
      resolve(response);
      return;
    }

    response.json()
      .then((json) => {
        const error = json || { message: response.statusText };
        reject(error);
      }).catch(() => reject({ message: 'Response not JSON' }));
  });
};

class Api {
  static async makeRequest(uri, requestData = {}) {
    const url = API_URL + uri;

    return new Promise((resolve, reject) => {
      fetch(url, requestData)
        .then(handleErrors)
        .then((response) => { console.log('response', response); resolve(response); })
        .catch((err) => { console.log('err', err); reject(err); });
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
