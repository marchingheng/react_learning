import React from 'react';

export default class HookDemo extends React.Component {
    state = {value: 0}
    addOne = ()=>{
        const {value} = this.state
        this.setState({value: value + 1})
    }
    render() {
        return (
        <div>
            <h1>Current value is {this.state.value}</h1>
            <button onClick={this.addOne}>click me to add one</button>
        </div>
        );
    }
}