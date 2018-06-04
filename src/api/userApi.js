import Api from './apiService';

class userApi {
  static login = user => Api.post('/v1/users/sign_in', user);
  static signUp = user => Api.post('/v1/users', user);
}

export default userApi;
