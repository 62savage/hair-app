import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import AuthScreen from './AuthView';
import { login } from './UserState';

export default compose(
  connect(
    state => ({
      user: state.user.user,
    }),
    dispatch => ({
      login: userData => dispatch(login(userData)),
    }),
  ),
  lifecycle({
    componentDidMount() {
      this.props.login();
    },
  }),
)(AuthScreen);
