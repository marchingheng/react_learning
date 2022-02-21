import React from 'react';

export class Person extends React.Component {
    addPerson = ()=>{
        const name = this.nameNode.value
        const age = this.ageNode.value

    }

    render() {
        return (
        <div>
            <h1>I am Person component</h1>
            <input ref={c=>this.nameNode=c} type="text" placeholder='input name'></input>&nbsp;
            <input ref={c=>this.ageNode=c} type="text" placeholder='input age'></input>&nbsp;
            <button onClick={this.addPerson}>Add a person</button>
            <ul>
                <li>name1--age1</li>
                <li>name2--age2</li>
            </ul>
        </div>
        );
    }
}