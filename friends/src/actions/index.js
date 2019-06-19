import axios from "axios";

export const LOGIN_FETCHING = "LOGIN_FETCHING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const FRIENDS_FETCHING = "FRIENDS_FETCHING";
export const FRIENDS_FETCHING_SUCCESS = "FRIENDS_FETCHING_SUCCESS";
export const FRIENDS_FETCHING_FAILURE = "FRIENDS_FETCHING_FAILURE";


export const login = accountData => dispatch => {
    dispatch({ type: LOGIN_FETCHING });
    axios.post("http://localhost:5000/api/login", accountData)
    .then(response => {
        dispatch({ type: LOGIN_FETCHING, payload: response.data })
    })
    .catch(error => {
        dispatch({ type: LOGIN_FAILURE, payload: "Your account information are not recognized. Please check or contact the support team." })
    })
}

/* export const fetchFriends = () => dispatch => {
    dispatch({ type: FETCHING });
    axios.get("http://localhost:5000/api/friends")
    .then
} */