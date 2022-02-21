import React from 'react';
import { createIncrementAction, createDecrementAction } from '../../redux/sum_action';

export default class Count extends React.Component {
    increament = () => {
        const {value} = this.selectedNumber
        this.props.increment(value*1)

    }
    decreament = () => {
        const {value} = this.selectedNumber
    }
    increamentIfOdd = () => {
        const {value} = this.selectedNumber
    }
    increamentAsync = () => {
        const {value} = this.selectedNumber
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