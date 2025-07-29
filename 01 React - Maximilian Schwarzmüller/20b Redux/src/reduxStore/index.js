import { createStore } from 'redux';

const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {

    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }
    if (action.type === 'increase') {
        return {
            counter: state.counter + action.payload
        }
    }
    return state;
}

const reduxStore = createStore(counterReducer);

export default reduxStore;