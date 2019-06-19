import { LOGIN_FETCHING, LOGIN_SUCCESS, LOGIN_FAILURE, FRIENDS_FETCHING, FRIENDS_FETCHING_SUCCESS, FRIENDS_FETCHING_FAILURE } from "../actions";

const initialState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [],
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null
}

export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_FETCHING:
            return {
                ...state,
                deletingFriend: false,
                fetchingFriends: false,
                friends: [],
                loggingIn: true,
                savingFriends: false,
                updatingFriend: false,
                error: null
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                deletingFriend: false,
                fetchingFriends: false,
                friends: action.payload,
                loggingIn: false,
                savingFriends: false,
                updatingFriend: false,
                error: null
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                deletingFriend: false,
                fetchingFriends: false,
                friends: [],
                loggingIn: false,
                savingFriends: false,
                updatingFriend: false,
                error: action.payload
            };
        case FRIENDS_FETCHING:
            return "";
        case FRIENDS_FETCHING_SUCCESS:
            return "";
        case FRIENDS_FETCHING_FAILURE:
            return "";   
        default:
            return state;
    }
}