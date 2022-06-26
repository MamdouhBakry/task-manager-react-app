import axiosInstance from "../../helper/axios";
import { taskConstants } from "./types";

// get all tasks
export const getTasks = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: taskConstants.GET_ALL_TASKS_REQUEST });
            const res = await axiosInstance.get(`/task`);
            if (res.status === 200) {
                dispatch({
                    type: taskConstants.GET_ALL_TASKS_SUCCESS,
                    payload: res.data,
                });
            } else {
                dispatch({ type: taskConstants.GET_ALL_TASKS_FAILURE });
            }
        } catch (error) {
            console.log(error);
        }
    };
};

// create task

export const addTask = (task) => {
    return async (dispatch) => {
        try {
            dispatch({ type: taskConstants.ADD_TASK_REQUEST });
            const res = await axiosInstance.post(`/task/create`, task);
            if (res.status === 201) {
                dispatch({ type: taskConstants.ADD_TASK_SUCCESS });
                dispatch(getTasks());
            } else {
                dispatch({ type: taskConstants.ADD_PRODUCT_FAILURE });
            }
        } catch (error) {
            console.log(error);
        }
    };
};

// Edit task By ID
export const updateTaskById = (task, id) => {
    return async (dispatch) => {
        try {
            const res = await axiosInstance.put(`/task/updateTask/${id}`, task);
            dispatch({ type: taskConstants.UPDATE_TASK_BY_ID_REQUEST });
            if (res.status === 202) {
                dispatch({ type: taskConstants.UPDATE_TASK_BY_ID_SUCCESS });
                dispatch(getTasks());
            } else {
                const { error } = res.data;
                dispatch({
                    type: taskConstants.UPDATE_TASK_BY_ID_FAILURE,
                    payload: {
                        error,
                    },
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
};


// Delete Task By ID

export const deleteProductById = (id) => {
    return async (dispatch) => {
        try {
            const res = await axiosInstance.delete(`/task/removeTask/${id}`);
            dispatch({ type: taskConstants.DELETE_TASK_BY_ID_REQUEST });
            if (res.status === 202) {
                dispatch({ type: taskConstants.DELETE_TASK_BY_ID_SUCCESS });
                dispatch(getTasks());
            } else {
                const { error } = res.data;
                dispatch({
                    type: taskConstants.DELETE_TASK_BY_ID_FAILURE,
                    payload: {
                        error,
                    },
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
};