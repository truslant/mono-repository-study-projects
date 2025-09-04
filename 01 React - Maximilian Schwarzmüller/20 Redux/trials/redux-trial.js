const { createStore } = require('redux')

const rootReducer = (state = { counter: 0 }, action) => {
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
    return state
}

const store = createStore(rootReducer)

store.dispatch({ type: 'increment' });
let curCounter = store.getState()
console.log('Counter after increment:', curCounter)
store.dispatch({ type: 'decrement' });
curCounter = store.getState()
console.log('Counter after decrement:', curCounter)