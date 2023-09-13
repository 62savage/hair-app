// @flow
import { connect } from 'react-redux';
import { compose } from 'recompose';

import ResultScreen from './ResultView';
import { login } from '../auth/UserState';
import { setAnalysis } from '../analysis/AnalysisState';

export default compose(
  connect(
    state => ({
      user: state.user.user,
      tree: state.tree.tree,
    }),
    dispatch => ({
      login: userData => dispatch(login(userData)),
      setAnalysisState: id => dispatch(setAnalysis(id)),
    }),
  ),
)(ResultScreen);
