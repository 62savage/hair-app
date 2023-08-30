// initial state
const initialState = {
  user: {},
};

// actions
const USER_LOGGED_IN = 'UserState/USER_LOGGED_IN';
const USER_SIGN_UP = 'UserState/USER_SIGN_UP';
const USER_LOGGED_OUT = 'UserState/USER_LOGGED_OUT';

function userLoggedIn(user) {
  return {
    type: USER_LOGGED_IN,
    user,
  };
}

function userSignUp(user) {
  return {
    type: USER_SIGN_UP,
    user,
  };
}

function userLoggedOut() {
  return {
    type: USER_LOGGED_OUT,
  };
}

export function login(userData) {
  // Do items loading here
  return (dispatch, getState) => {
    dispatch(userLoggedIn(userData));
  };
}

export function signup(userData) {
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
