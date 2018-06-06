import validate from 'validate.js';

export const login = {
  email: {
    presence: true,
    email: true
  },

  password: {
    presence: true
  }
};

export const editProfile = {
  username: {
    presence: true
  },

  email: {
    presence: true,
    email: true
  },

  password: {
    presence: true
  }
};

export const signUp = {
  username: {
    presence: true
  },

  email: {
    presence: true,
    email: true
  },

  password: {
    presence: true,
    length: {
      minimum: 8,
      message: 'must be at least 8 characters'
    }
  },

  confirmPassword: {
    presence: true,
    equality: 'password'
  },

  gender: {
    presence: true
  }
};

export const validations = constraints =>
  data => validate(data.toJS(), constraints);

