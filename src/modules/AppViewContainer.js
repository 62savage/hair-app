import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { Platform, UIManager } from 'react-native';

import AppView from './AppView';
import { login } from './auth/UserState';

export default compose(
  connect(
    state => ({
      user: state.user.user,
    }),
    dispatch => ({
      loadImages: () => dispatch(loadImages()),
      login: () => dispatch(login({ email: 'gmail', name: 'name' })),
    }),
  ),
  lifecycle({
    componentDidMount() {
      if (Platform.OS === 'android') {
        // eslint-disable-next-line no-unused-expressions
        UIManager.setLayoutAnimationEnabledExperimental &&
          UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    },
  }),
)(AppView);
