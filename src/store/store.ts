import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({
});

const configureStore = () => {
    const store = createStore(rootReducer);
    return { store };
};

export default configureStore;