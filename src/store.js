import { combineReducers, createStore } from "redux";

const initialState = {};

const reducer = (state = initialState, action) => {
    return state;
};

const rootReducer = combineReducers({
    reducer: reducer,
});

const store = createStore(rootReducer);

export default store;
