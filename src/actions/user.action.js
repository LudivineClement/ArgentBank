import axios from 'axios';

export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const USER_PROFILE = "USER_PROFILE";

export const userLoginSuccess = (token) => ({
  type: USER_LOGIN_SUCCESS,
  payload: token,
});

export const userLoginFailure = (error) => ({
  type: USER_LOGIN_FAILURE,
  payload: error,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const userProfileSuccess = (userProfile) => ({
  type: USER_PROFILE,
  payload: userProfile,
});


export const loginUser = (email, password, navigate) => {
  return async (dispatch) => {

    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/login', {
        email: email,
        password: password,
      });

      console.log(response);

      if (response.status === 200) {
        const token = response.data.body.token;
        localStorage.setItem('token', token);
        dispatch(userLoginSuccess(token));
        navigate('/user-account');
      } else {
        localStorage.removeItem('token');
      }
    } catch (error) {
      dispatch(userLoginFailure('identifiants incorrects'));
      localStorage.removeItem('token');
    }
  };
};

export const fetchUserProfile = () => {
  return async (dispatch, getState) => {
    const token = getState().user.token;
    if (!token) {
      return;
    }
    
    try {
      const response = await axios.post(
        'http://localhost:3001/api/v1/user/profile',
        {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response);

      if (response.status === 200) {
        const userProfile = response.data.body;
        dispatch(userProfileSuccess(userProfile));
      }
    } catch (error) {
      console.error(error);
    }
  };
};


