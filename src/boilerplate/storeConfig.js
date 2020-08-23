import React from 'react';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

// builder logger enhancer
const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
};

// apply middleWares
const middleWares = [reduxThunk];
if (process.env.NODE_ENV === 'development') middleWares.push(logger);
// create store
const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default (props) => (
    <Provider store={store}>
        {props.children}
    </Provider>
);