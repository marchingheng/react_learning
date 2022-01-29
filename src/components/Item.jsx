import React, { Component } from 'react';

export default class Item extends Component {
    handleCheck = (id)=>{
        return (event)=>{
            this.props.updateDone(id, event.target.checked)
        }
    }
  render() {
    const {id, name, done} = this.props

    return (
        <li>
            <label>
                <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)}/>
                <span>{name}</span>
            </label>
            <button>delete</button>
        </li>
    )
  }
}
