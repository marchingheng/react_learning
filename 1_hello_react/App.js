import React,{Component} from "react"
import Welcome from "./components/greeting/welcome"
import Announce from "./components/working/announce"

export default class App extends Component{
    render(){
        return (
            <div>
                <Welcome/>
                <Announce/>
            </div>
        )
    }
}