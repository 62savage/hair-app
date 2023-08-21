import { combineReducers } from 'redux';

// ## Generator Reducer Imports
import gallery from '../modules/gallery/GalleryState';
import app from '../modules/AppState';
import user from '../modules/auth/UserState';

export default combineReducers({
  // ## Generator Reducers
  gallery,
  app,
  user,
});
