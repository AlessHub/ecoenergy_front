import axios from "axios";

export const SET_AUTH_TOKEN = "SET_AUTH_TOKEN";

export const setAuthToken = (token) => ({
  type: SET_AUTH_TOKEN,
  token,
});

export const authenticateUser = (username, password) => {
  return (dispatch) => {
    axios.post("/api/authenticate", { username, password })
      .then((response) => {
        const token = response.data.token;
        dispatch(setAuthToken(token));
        // Save the token in localStorage or sessionStorage for persistence
      })
      .catch((error) => {
        // Handle authentication error
      });
  };
};