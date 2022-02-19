import React from 'react';

export default class Count extends React.Component {
    state = {sum:0}

    increament = () => {
        const {value} = this.selectedNumber
        const {sum} = this.state
        this.setState({sum: sum+value*1})
    }
    decreament = () => {
        const {value} = this.selectedNumber
        const {sum} = this.state
        this.setState({sum: sum-value*1})
    }
    increamentIfOdd = () => {
        const {value} = this.selectedNumber
        const {sum} = this.state
        if(sum%2 === 1){this.setState({sum: sum+value*1})}
    }
    increamentAsync = () => {
        const {value} = this.selectedNumber
        const {sum} = this.state
        setTimeout(()=>{
            this.setState({sum: sum+value*1})
        }, 500)
    }

    render() {
        return (
        <div>
            <h1>current sum is: {this.state.sum}</h1>
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