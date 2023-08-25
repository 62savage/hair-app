import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import AuthScreen from './AuthView';
import { login } from './UserState';
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
  lifecycle({
    componentDidMount() {
      this.props.login();
    },
  }),
)(AuthScreen);
