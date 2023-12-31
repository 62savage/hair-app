import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import StartView from './StartView';
import { login } from '../auth/UserState';
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
)(StartView);
