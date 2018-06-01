import Api from './apiService';

class userApi {
  static login = user => Api.post('/v1/users/sign_in', user);
}

export default userApi;
