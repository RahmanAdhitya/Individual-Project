import post_types from '../types/posts';

const initial_state = {
  id: 0,
  user_accountId: '',
  image_URL: '',
  number_of_like: 0,
  caption: '',
  location: '',
};

const postsReducer = (state = initial_state, action) => {
  if (action.types === post_types.POST_CONTENT) {
    return {
      ...state,
      id: 0,
      user_accountId: '',
      image_URL: '',
      number_of_like: 0,
      caption: '',
      location: '',
    };
  }

  return state;
};

export default postsReducer;
