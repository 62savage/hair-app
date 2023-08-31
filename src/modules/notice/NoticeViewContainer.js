import { connect } from 'react-redux';
import { compose } from 'recompose';

import NoticeScreen from './NoticeView';

export default compose(
  connect(state => ({
    user: state.user.user,
  })),
)(NoticeScreen);
