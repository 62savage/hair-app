import { connect } from 'react-redux';
import { compose } from 'recompose';

import AnalysisView from './AnalysisView';
import { loadImages } from '../gallery/GalleryState';

export default compose(
  connect(
    state => ({
      user: state.user.user,
      tree: state.tree.tree,
      curAnalysis: state.analysisState.curAnalysis,
    }),
    dispatch => ({
      loadImages: () => dispatch(loadImages()),
      login: userData => dispatch(login(userData)),
    }),
  ),
)(AnalysisView);
