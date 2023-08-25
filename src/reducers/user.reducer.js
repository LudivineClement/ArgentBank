import { USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, LOGOUT_USER, USER_PROFILE } from '../actions/user.action';

const initialState = {
  token: null,
  loginError: null,
  userProfile: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        loginError: null,
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        token: null,
        loginError: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        token: null,
        loginError: null,
        userProfile: '',
      };
    case USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;


