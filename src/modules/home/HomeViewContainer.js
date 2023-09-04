import { compose, withState } from 'recompose';

import HomeScreen from './HomeView';
import { connect } from 'react-redux';

export default compose(
  connect(state => ({
    user: state.user.user,
  })),
  withState('isExtended', 'setIsExtended', false),
)(HomeScreen);
