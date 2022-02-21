import {createStore, combineReducers} from 'redux'
import countReducer from './reducers/count'
import personReducer from './reducers/person'
// Steps to use redux devtool:
// 1. install the chrome extension: https://chrome.google.com/webstore/detail/redux-devtools/
// 2. npm install 'redux-devtools-extension'
// 3. config the devtool in store
import {composeWithDevTools} from 'redux-devtools-extension'
const allReducers = combineReducers({
    sum: countReducer, 
    people: personReducer
})

export default createStore(allReducers, composeWithDevTools())