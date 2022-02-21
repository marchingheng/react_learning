import { nanoid } from 'nanoid';
import React from 'react';
import { createAddPersonAction } from '../../redux/actions/person';
import {connect} from 'react-redux'

export class Person extends React.Component {
    addPerson = ()=>{
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {name, age, id: nanoid()}
        this.props.add_person(personObj)
    }

    render() {
        return (
        <div>
            <h1>I am Person component</h1>
            <h2>Sum from Count component is {this.props.sum}</h2>
            <input ref={c=>this.nameNode=c} type="text" placeholder='input name'></input>&nbsp;
            <input ref={c=>this.ageNode=c} type="text" placeholder='input age'></input>&nbsp;
            <button onClick={this.addPerson}>Add a person</button>
            <ul>
                {
                    this.props.people.map(person => <li key={person.id}>name: {person.name}, age: {person.age}</li>)
                }
            </ul>
        </div>
        );
    }
}

const mapStateToProps = state => ({people: state.people, sum: state.sum})
const mapDispatchToProps = {
    add_person: createAddPersonAction
}
export default connect(mapStateToProps,mapDispatchToProps)(Person)