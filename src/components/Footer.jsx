import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    const {toDos} = this.props
    const totalItemCount = toDos.length
    const doneItemCount = toDos.reduce((prev, toDo)=>{return toDo.done ? prev+1 : prev}, 0)
    return <div>You have finished {doneItemCount}/{totalItemCount}</div>;
  }
}
