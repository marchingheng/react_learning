import React,{Component} from "react"
import Home from "./pages/Home"
import About from "./pages/About"
import { Link, BrowserRouter, Route, Routes, Navigate } from "react-router-dom"

export default class App extends Component{
    render(){
        return (
            <BrowserRouter>
                {/* register the routes */}
                <div>
                    <Link to="home">Route to Home</Link> <br/>
                    <Link to="about">Route to About</Link>
                </div>
                {/* subscribe the Routes component to the routes */}
                <ul>
                    <Routes>
                        {/* the default matching is exact matching, so you have to use "home/*" in order to explore the nested routes */}
                        <Route path="home/*" element={<Home/>}/>
                        <Route path="about" element={<About/>}/>
                        {/* when the url is to the index page, it is equal to <Link to="/about"> is clicked */}
                        <Route path="/" element={<Navigate to="home"/>}/>
                    </Routes>
                </ul>
            </BrowserRouter>
        )
    }
}