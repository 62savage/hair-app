// @flow
import { connect } from 'react-redux';
import { compose } from 'recompose';

import ResultScreen from './ResultView';

export default compose(
  connect(state => ({
    user: state.user.user,
    tree: state.tree.tree,
  })),
)(ResultScreen);
