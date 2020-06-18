import { combineReducers, createStore } from 'redux';

const initialState = {};

const reducer = (state = initialState) => {
    return state;
};

const rootReducer = combineReducers({
    reducer,
});

const store = createStore(rootReducer);

export default store;
