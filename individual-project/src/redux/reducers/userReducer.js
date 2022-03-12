import user_types from '../types/users';
const initial_state = {
  id: 0,
  username: '',
  firstname: '',
  email: '',
  role: '',
};
const userReducer = (state = initial_state, action) => {
  if (action.type === user_types.LOGIN_USER) {
    console.log(action);
    return {
      ...state,
      id: action.payload.id,
      username: action.payload.username,
      firstname: action.payload.firstname,
      email: action.payload.email,
      role: action.payload.role,
    };
  } else if (action.type === user_types.LOGOUT_USER) {
    return initial_state;
  }
  return state;
};

export default userReducer;
