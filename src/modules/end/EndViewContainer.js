import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import EndView from './EndView';
import { login } from '../auth/UserState';
import { loadImages } from '../gallery/GalleryState';

export default compose(
  connect(
    state => ({
      user: state.user.user,
    }),
    dispatch => ({
      loadImages: () => dispatch(loadImages()),
      login: userData => dispatch(login(userData)),
    }),
  ),
)(EndView);
