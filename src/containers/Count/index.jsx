import CountUI from "../../components/Count"
import {connect} from 'react-redux'
import { INCREMENT } from "../../redux/constant"

// According to the syntax of react-redux, this function is passed as props to CountUI in this way. It is the value that flow: redux store => Count Container => Count UI
// the argument of this function is the current value in the store
function a(state){
    return {count: state}
}

// According to the syntax of react-redux, this function is passed as props to CountUI in this way. It is the callback to set value that flow: redux store => Count Container => Count UI
// the argument of this function is the action creator that store can use
function b(dispatch){
    return {increment: (data)=>{dispatch({type: INCREMENT, data})}}
}

// create a Count Container which will interact with redux directly. This Count Container is used in App.js to interact with redux store
export default connect(a,b)(CountUI)

