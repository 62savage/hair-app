import { connect } from 'react-redux';
import { compose } from 'recompose';

import InfoScreen from './InfoView';

export default compose(
  connect(state => ({
    user: state.user.user,
  })),
)(InfoScreen);
