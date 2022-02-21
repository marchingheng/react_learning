import {createStore, combineReducers} from 'redux'
import countReducer from './reducers/count'
import personReducer from './reducers/person'
const allReducers = combineReducers({
    sum: countReducer, 
    people: personReducer
})

export default createStore(allReducers)