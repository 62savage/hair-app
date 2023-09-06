import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import DetailScreen from './DetailView';

export default compose(
  connect(state => ({
    user: state.user.user,
    tree: state.tree.tree,
    curAnalysis: state.analysisState.curAnalysis,
  })),
)(DetailScreen);

// // @flow
