import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    const {name, done} = this.props
    return (
        <li>
            <label>
                <input type="checkbox" defaultChecked={done}/>
                <span>{name}</span>
            </label>
            <button>delete</button>
        </li>
    )
  }
}
