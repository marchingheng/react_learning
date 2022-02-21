import {createStore} from 'redux'
import sumReducer from './reducers/count'

export default createStore(sumReducer)