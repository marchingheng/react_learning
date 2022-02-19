import React from 'react';
import store from '../../redux/store';

export default class Count extends React.Component {
    // componentDidMount(){
    //     // when Count component is mounted, start listening to the change of any state in store(subscribe)
    //     // if there is any change, render Count component again
    //     store.subscribe(()=>{
    //         this.setState({})
    //     })
    // }

    increament = () => {
        const {value} = this.selectedNumber
        store.dispatch({type: 'increment', data: value*1})

    }
    decreament = () => {
        const {value} = this.selectedNumber
        store.dispatch({type: 'decrement', data: value*1})
    }
    increamentIfOdd = () => {
        const {value} = this.selectedNumber
        const sum = store.getState()
        if(sum%2 === 1){store.dispatch({type: 'increment', data: value*1})}
    }
    increamentAsync = () => {
        const {value} = this.selectedNumber
        setTimeout(()=>{
            store.dispatch({type: 'increment', data: value*1})
        }, 500)
    }

    render() {
        return (
        <div>
            <h1>current sum is: {store.getState()}</h1>
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