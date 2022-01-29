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
    render(){
        const {toDos} = this.state
        return (
            <div>
                <Header addToDo={this.addToDo}/>
                <List toDos={toDos}/>
                <Footer/>
            </div>
        )
    }
}