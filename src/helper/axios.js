import axios from "axios";
import { api } from "./urlConfig";
import store from "../redux/store";
import { userConstants } from "../redux/actions/types";

const token = localStorage.getItem("token");
const axiosInstance = axios.create({
    baseURL: api,
    headers: {
        Authorization: token ? `Bearer ${token}` : "",
    },
});
axiosInstance.interceptors.request.use((req) => {
    const { user } = store.getState();
    if (user.token) {
        req.headers.Authorization = `Bearer ${user.token}`;
    }
    return req;
});
axiosInstance.interceptors.response.use(
    (res) => {
        return res;
    },
    (error) => {
        console.log(error.response);
        const status = error.response.status;
        if (status === 500) {
            localStorage.clear();
            store.dispatch({ type: userConstants.LOGOUT_SUCCESS });
        }
        return Promise.reject(error);
    }
);
export default axiosInstance;
