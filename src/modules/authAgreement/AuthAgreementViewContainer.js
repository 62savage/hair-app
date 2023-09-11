import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import AuthAgreementView from './AuthAgreementView';
import { login } from '../auth/UserState';

export default compose(
  connect(
    state => ({
      user: state.user.user,
    }),
    dispatch => ({
      login: userData => dispatch(login(userData)),
    }),
  ),
)(AuthAgreementView);
