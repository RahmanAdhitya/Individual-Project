import { combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import postsReducer from './reducers/posts.Reducer';

const rootReducer = combineReducers({
  auth: userReducer,
  post: postsReducer,
});

export default rootReducer;
