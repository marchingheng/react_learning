import React, { Component } from 'react';
import {nanoid} from 'nanoid';

export default class Header extends Component {
handleEnter = (event) => {
    const {keyCode, target} = event
    if (keyCode != 13) return
    const toDoObj = {id: nanoid(), name: target.value, done: false}
    this.props.addToDo(toDoObj)
}
  render() {
    return (
    <div>
        <input type="text" placeholder="please enter the todo item" onKeyUp={this.handleEnter}/>
    </div>
    );
  }
}
