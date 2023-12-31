import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import TestScreen from './TestView';

export default compose(
  connect(state => ({
    user: state.user.user,
  })),
)(TestScreen);

// // @flow
