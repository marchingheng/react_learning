import React, { Component } from 'react';

export default class Footer extends Component {
  selectAll = (event)=>{
    this.props.selectAll(event.target.checked)
  }
  render() {
    const {toDos} = this.props
    const totalItemCount = toDos.length
    const doneItemCount = toDos.reduce((prev, toDo)=>{return toDo.done ? prev+1 : prev}, 0)
    const isAllDone = totalItemCount != 0 && totalItemCount == doneItemCount
    return (
    <ul>
      <input type="checkbox" checked={isAllDone} onChange={this.selectAll}/> select/unselect all
      <div>You have finished {doneItemCount}/{totalItemCount}</div>
      <button>delete all finished button</button>
    </ul>)
  }
}
