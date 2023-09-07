import { USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, LOGOUT_USER, USER_PROFILE, UPDATE_USER_NAME } from '../actions/user.action';

const initialState = {
  loginError: null,
  userProfile: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loginError: null,
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loginError: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        loginError: null,
        userProfile: '',
      };
    case USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload,
      };
    case UPDATE_USER_NAME:
      const newProfile = { ...state.userProfile, userName: action.payload };
      return {
        ...state,
        userProfile: newProfile,
      };
    default:
      return state;
  }
};

export default userReducer;


