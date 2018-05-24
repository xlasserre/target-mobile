/* This is temporary until I have real reducers */
const users = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        {
          id: action.id,
          userName: action.name
        }
      ];
    default:
      return state;
  }
};

export default users;
