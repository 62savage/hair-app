import { compose, withState } from 'recompose';

import HomeScreen from './HomeView';
import { connect } from 'react-redux';
import { getTree } from './TreeState';

export default compose(
  connect(
    state => ({
      user: state.user.user,
      tree: state.tree.tree,
    }),
    dispatch => ({
      getTree: treeData => dispatch(getTree(treeData)),
    }),
  ),
  withState('isExtended', 'setIsExtended', false),
)(HomeScreen);
