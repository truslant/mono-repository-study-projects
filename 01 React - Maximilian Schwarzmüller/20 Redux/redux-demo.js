const { createStore } = require('redux');

const initialState = {
    counter: 0,
}

const reducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return (
            {
                counter: state.counter + 5
            }
        )
    }
    if (action.type === 'decrement') {
        return (
            {
                counter: state.counter - 5
            }
        )
    }
    if (action.type === 'increase') {
        return (
            {
                counter: state.counter + 5
            }
        )
    }

    return state;
}

const store = createStore(reducer);

const component = () => {
    const curState = store.getState();
    console.log('Component called, curState:', curState);
}

store.subscribe(component);

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });