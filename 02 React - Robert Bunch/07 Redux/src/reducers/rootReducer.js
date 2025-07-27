import { combineReducers } from 'redux'
import frozenFoodReducer from './frozenFoodReducer'

export default combineReducers({
    frozenFood: frozenFoodReducer,
})