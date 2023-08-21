import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import AuthScreen from './AuthView';
import { userLogin } from './UserState';
import { loadImages } from '../gallery/GalleryState';

export default compose(
  connect(
    state => ({
      user: state.user.user,
    }),
    dispatch => ({
      loadImages: () => dispatch(loadImages()),
      userLogin: () => dispatch(userLogin({ email: 'gmail', name: 'name' })),
    }),
  ),
  lifecycle({
    componentDidMount() {
      this.props.userLogin();
    },
  }),
)(AuthScreen);
