import CountUI from "../../components/Count"
import {connect} from 'react-redux'
import { INCREMENT } from "../../redux/constant"
import { createDecrementAction, createIncrementAction } from "../../redux/sum_action"

// According to the syntax of react-redux, this function is passed as props to CountUI in this way. It is the value that flow: redux store => Count Container => Count UI
// the argument of this function is the current value in the store
const mapStateToProps = state => ({count: state})

// // According to the syntax of react-redux, this function is passed as props to CountUI in this way. It is the callback to set value that flow: redux store => Count Container => Count UI
// // the argument of this function is the dispatch function(action creator) that store can use
// function mapDispatchToProps(dispatch){
//     return {
//         increment: data => dispatch(createIncrementAction(data)),
//         decrement: data => dispatch(createDecrementAction(data))
//     }
// }
// // You can also simplified it as an object like below, this kind of simplification is defined within react-redux
const mapDispatchToProps = {
    increment: createIncrementAction,
    decrement: createDecrementAction
}

// create a Count Container which will interact with redux directly. This Count Container is used in App.js to interact with redux store
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)

