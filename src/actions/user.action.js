import axios from "axios";

export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";
export const LOGOUT_USER = "LOGOUT_USER";
export const USER_PROFILE = "USER_PROFILE";
export const UPDATE_USER_NAME = "UPDATE_USER_NAME";

// Action pour gérer la connexion réussie de l'utilisateur
export const userLoginSuccess = () => ({
  type: USER_LOGIN_SUCCESS,
});

// Action pour gérer l'échec de connexion de l'utilisateur
export const userLoginFailure = (error) => ({
  type: USER_LOGIN_FAILURE,
  payload: error,
});

// Action pour déconnecter l'utilisateur
export const logoutUser = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
  return {
    type: LOGOUT_USER,
  };
};

//////// Action pour gérer la connexion de l'utilisateur

export const loginUser = (email, password, navigate, rememberMe) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        {
          email: email,
          password: password,
        }
      );

      if (response.status === 200) {
        const token = response.data.body.token;
        if (rememberMe) {
          localStorage.setItem("token", token);
        } else {
          sessionStorage.setItem("token", token);
        }
        navigate("/user-account");
        dispatch(userLoginSuccess());
      } else {
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
      }

      if (response.status === 401) {
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        navigate("/login");
      }
    } catch (error) {
      dispatch(userLoginFailure("identifiants incorrects"));
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
    }
  };
};


///////// Action pour récupérer le profil de l'utilisateur depuis le serveur

export const fetchUserProfile = () => {
  return async (dispatch) => {
    let token = localStorage.getItem("token");

    if (!token) {
      token = sessionStorage.getItem("token");
    }

    if (!token) {
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        const userProfile = response.data.body;
        dispatch({
          type: USER_PROFILE,
          payload: userProfile,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
};


///////// Action pour mettre à jour le nom d'utilisateur

export const updateUserName = (userName) => {
  return async (dispatch) => {
    let token = localStorage.getItem("token");

    if (!token) {
      token = sessionStorage.getItem("token");
    }

    if (!token) {
      return;
    }

    try {
      const response = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        { userName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        dispatch({
          type: UPDATE_USER_NAME,
          payload: userName,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
};
