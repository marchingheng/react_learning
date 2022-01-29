import React, { Component } from 'react';
import Item from './Item';

export default class List extends Component {
  render() {
    const {toDos, updateDone} = this.props
    return (
    <div>
        {
            toDos.map(
                (toDo) => {
                    return <Item key={toDo.id} {...toDo} updateDone={updateDone}/>
                }
            )
        }
    </div>
    );
  }
}
