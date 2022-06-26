import { taskConstants } from "../actions/types";

let initialState = {
    tasks: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case taskConstants.GET_ALL_TASKS_SUCCESS:
            return {
                ...state,
                tasks: action.payload
            }
        case taskConstants.DELETE_TASK_BY_ID_SUCCESS:
            return {
                ...state
            }
        case taskConstants.UPDATE_TASK_BY_ID_SUCCESS:
            return {
                ...state
            }
        default:
            return state;
    }
}