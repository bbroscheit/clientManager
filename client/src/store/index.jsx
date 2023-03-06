import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import mainReducer from "../reducer/index";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore (
    mainReducer,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;