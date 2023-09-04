import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import DetailScreen from './DetailView';

export default compose(
  connect(state => ({
    user: state.user.user,
  })),
)(DetailScreen);

// // @flow
