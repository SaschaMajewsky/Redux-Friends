import { LOGIN_FETCHING, LOGIN_SUCCESS, LOGIN_FAILURE, FRIENDS_FETCHING, FRIENDS_FETCHING_SUCCESS, FRIENDS_FETCHING_FAILURE, FRIENDS_ADD_POST, FRIENDS_ADD_SUCCESS } from "../actions";

const initialState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [],
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_FETCHING:
            return {
                ...state,
                loggingIn: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                error: action.payload
            };
        case FRIENDS_FETCHING:
            return {
                ...state,
                fetchingFriends: true,
            };
        case FRIENDS_FETCHING_SUCCESS:
            return {
                ...state,
                fetchingFriends: false,
                friends: action.payload
            };
        case FRIENDS_FETCHING_FAILURE:
            return {
                ...state,
                fetchingFriends: false,
                error: action.payload
            }; 
        case FRIENDS_ADD_POST:
            return {
            ...state,
            updatingFriend: true
            }
        case FRIENDS_ADD_SUCCESS:
            console.log("dispatched friend", action.payload)
            return {
            updatingFriend: false,
            friends: action.payload
            }
        default:
            return state;
    }
}

export default reducer;