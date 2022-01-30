import React,{Component} from "react"
import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"

export default class App extends Component{
    state = {toDos: [
        {id: 1, name: "sleep", done: true},
        {id: 2, name: "eat", done: false},
        {id: 3, name: "study", done: true}
    ]}
    addToDo = (toDoObj)=>{
        const {toDos} = this.state
        this.setState({toDos: [toDoObj, ...toDos]})
    }

    updateDone = (id, done)=>{
        const {toDos} = this.state
        const newToDos = toDos.map(toDo => {
            if(toDo.id == id)return {...toDo, done}
            return toDo
        })
        this.setState({toDos: newToDos})
    }

    deleteItem = (id)=>{
        const {toDos} = this.state
        const newToDos = toDos.filter(toDo => toDo.id != id)
        this.setState({toDos: newToDos})
    }
    
    selectAll = (done)=>{
        const {toDos} = this.state
        const newToDos = toDos.map(toDo => {return {...toDo, done}})
        this.setState({toDos: newToDos})
    }

    deleteDoneItem = ()=>{
        const {toDos} = this.state
        const newToDos = toDos.filter(toDo => !toDo.done)
        this.setState({toDos: newToDos})
    }

    render(){
        const {toDos} = this.state
        return (
            <div>
                <Header addToDo={this.addToDo}/>
                <List toDos={toDos} updateDone={this.updateDone} deleteItem={this.deleteItem}/>
                <Footer toDos={toDos} selectAll={this.selectAll} deleteDoneItem={this.deleteDoneItem}/>
            </div>
        )
    }
}