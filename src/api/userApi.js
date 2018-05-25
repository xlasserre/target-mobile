import Api from './apiService';

class userApi {
  static login = (user) => {
    console.log('user in userApi: ', user);
    return Api.post('/v1/users/sign_in', user);
  }
}

export default userApi;
