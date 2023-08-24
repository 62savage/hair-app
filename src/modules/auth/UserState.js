// initial state
const initialState = {
  user: {},
};

// actions
const USER_LOGGED_IN = 'UserState/USER_LOGGED_IN';

function userLoggedIn(user) {
  return {
    type: USER_LOGGED_IN,
    user,
  };
}

export function userLogin(userData) {
  // Do items loading here
  return (dispatch, getState) => {
    console.log(getState());
    dispatch(userLoggedIn(userData));
  };
}

export default function AuthStateReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGGED_IN:
      console.log('this activated');
      return Object.assign({}, state, {
        user: action.user,
      });
    default:
      return state;
  }
}
