import { createStore, applyMiddleware } from 'redux';
import reducer from "./reducers/combineReducers";
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(reduxThunk))
);

export default store;