import axios from "axios";

export const LOGIN_FETCHING = "LOGIN_FETCHING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const FRIENDS_FETCHING = "FRIENDS_FETCHING";
export const FRIENDS_FETCHING_SUCCESS = "FRIENDS_FETCHING_SUCCESS";
export const FRIENDS_FETCHING_FAILURE = "FRIENDS_FETCHING_FAILURE";

export const FRIENDS_ADD_POST = "FRIENDS_ADD_POST";
export const FRIENDS_ADD_SUCCESS = "FRIENDS_ADD_SUCCESS";

export const login = accountData => dispatch => {
    dispatch({ type: LOGIN_FETCHING });
    return axios.post("http://localhost:5000/api/login", accountData)
    .then(response => {
        localStorage.setItem("api_token", response.data.payload);
        dispatch({ type: LOGIN_SUCCESS, payload: response.data })
    })
    .catch(error => {
        dispatch({ type: LOGIN_FAILURE, payload: "Your account information are not recognized. Please check or contact the support team." })
    })
}

export const fetchFriends = () => dispatch => {
    dispatch({ type: FRIENDS_FETCHING });
    return axios.get("http://localhost:5000/api/friends", { headers: { Authorization: localStorage.getItem("api_token")}})
    .then(response => {
        dispatch({ type: FRIENDS_FETCHING_SUCCESS, payload: response.data })
    })
    .catch(error => dispatch({ type: FRIENDS_FETCHING_FAILURE, payload: "Well, this did not went right. Please try again!"}))
}

export const addFriend = friend => dispatch => {
    console.log("submitted friend:", friend)
    dispatch({ type: FRIENDS_ADD_POST })
    return axios
    .post("http://localhost:5000/api/friends", friend, { headers: { Authorization: localStorage.getItem("api_token")}})
    .then(response =>  dispatch({type: FRIENDS_ADD_SUCCESS, payload: response.data }))
    .catch(error => console.log("Added Error: ", error))
}