import axiosInstance from "../../helper/axios";
import { userConstants } from "./types";

export const login = (user) => {
    console.log(user);

    return async (dispatch) => {
        dispatch({ type: userConstants.LOGIN_REQUEST });
        try {
            const res = await axiosInstance.post("/signin", { ...user });
            if (res.status === 200) {
                const { token, user } = res.data;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                dispatch({
                    type: userConstants.LOGIN_SUCCSESS,
                    payload: {
                        token,
                        user,
                    },
                });
            } else {
                if (res.status === 400) {
                    dispatch({
                        type: userConstants.LOGIN_FAILURE,
                        payload: {
                            error: res.data.error,
                        },
                    });
                }
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const signup = (user) => {
    console.log(user);

    return async (dispatch) => {
        dispatch({ type: userConstants.USER_REGISTER_REQUEST });
        const res = await axiosInstance.post("/signup", { ...user });

        if (res.status === 201) {
            const { message } = res.data;

            dispatch({
                type: userConstants.USER_REGISTER_SUCCESS,
                payload: {
                    message,
                },
            });
        } else {
            if (res.status === 400) {
                dispatch({
                    type: userConstants.USER_REGISTER_FAILURE,
                    payload: {
                        error: res.data.error,
                    },
                });
            }
        }
    };
};


export const isUserLoggedIn = () => {
    return async (dispatch) => {
        const token = localStorage.getItem("token");
        if (token) {
            const user = JSON.parse(localStorage.getItem("user"));
            dispatch({
                type: userConstants.LOGIN_SUCCSESS,
                payload: {
                    token,
                    user,
                },
            });
        } else {
            dispatch({
                type: userConstants.LOGIN_FAILURE,
                payload: {
                    error: "failed to login",
                },
            });
        }
    };
};

export const signout = () => {
    return async (dispatch) => {
        dispatch({ type: userConstants.LOGOUT_REQUEST });
        try {
            const res = await axiosInstance.post("/signout");
            if (res.status === 200) {
                localStorage.clear();
                dispatch({
                    type: userConstants.LOGOUT_SUCCESS,
                });
            } else {
                dispatch({
                    type: userConstants.LOGOUT_FAILURE,
                    payload: {
                        error: res.data.error,
                    },
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
};
