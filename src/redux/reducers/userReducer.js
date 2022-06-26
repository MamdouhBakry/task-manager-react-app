import { userConstants } from "../actions/types";

const initState = {
    token: null,
    user: {
        firstName: "",
        lastName: "",
        email: "",
        picture: "",
    },
    authenticate: false,
    authenticating: false,
    loading: false,
    error: null,
    message: "",
};
export default (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                ...state,
                authenticating: true,
            };
        case userConstants.LOGIN_SUCCSESS:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                authenticate: true,
                authenticating: false,
            };
        case userConstants.LOGOUT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case userConstants.LOGOUT_SUCCESS:
            return {
                ...initState,
                loading: false,
            };
        case userConstants.LOGOUT_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                loading: false,
            };
        case userConstants.USER_REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case userConstants.USER_REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload.message,
            };
        case userConstants.USER_REGISTER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
        default:
            return state;
    }
};
