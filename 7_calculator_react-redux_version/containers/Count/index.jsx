import React from 'react';
import {connect} from 'react-redux'
import { createDecrementAction, createIncrementAction } from "../../redux/sum_action"

class Count extends React.Component {
    increament = () => {
        const {value} = this.selectedNumber
        this.props.increment(value*1)

    }
    decreament = () => {
        const {value} = this.selectedNumber
        this.props.decrement(value*1)
    }
    increamentIfOdd = () => {
        const {value} = this.selectedNumber
        if(this.props.count % 2 === 1){
            this.props.increment(value*1)
        }
    }
    increamentAsync = () => {
        const {value} = this.selectedNumber
        setTimeout(() => {
            this.props.increment(value*1)
        }, 500)
    }

    render() {
        return (
        <div>
            <h1>current sum is: {this.props.count}</h1>
            <select ref={c => this.selectedNumber = c}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>&nbsp;
            <button onClick={this.increament}>+</button>&nbsp;
            <button onClick={this.decreament}>-</button>&nbsp;
            <button onClick={this.increamentIfOdd}>if current sum is odd, then increment</button>&nbsp;
            <button onClick={this.increamentAsync}>increment async</button>&nbsp;
        </div>
        );
    }
}

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
export default connect(mapStateToProps,mapDispatchToProps)(Count)

