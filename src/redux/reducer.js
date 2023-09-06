import { combineReducers } from 'redux';

// ## Generator Reducer Imports
import gallery from '../modules/gallery/GalleryState';
import app from '../modules/AppState';
import user from '../modules/auth/UserState';
import tree from '../modules/home/TreeState';
import analysisState from '../modules/analysis/AnalysisState';

export default combineReducers({
  // ## Generator Reducers
  gallery,
  app,
  user,
  tree,
  analysisState,
});
