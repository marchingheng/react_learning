import React from 'react';
import {connect} from 'react-redux'
import { createDecrementAction, createIncrementAction } from "../../redux/actions/count"

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
        if(this.props.sum % 2 === 1){
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
            <h1>I am Count component</h1>
            <h2>current sum is: {this.props.sum}</h2>
            <h2>Number of people from Person component is {this.props.people.length}</h2>
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

const mapStateToProps = state => ({sum: state.sum, people: state.people})
const mapDispatchToProps = {
    increment: createIncrementAction,
    decrement: createDecrementAction
}
export default connect(mapStateToProps,mapDispatchToProps)(Count)

