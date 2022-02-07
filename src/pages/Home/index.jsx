import React from 'react';
import { Link, BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import News from './News/';
import Messages from './Messages/'
export default class Home extends React.Component {
    render() {
        return (
            <>
                <h1>Home</h1>
                <ul>
                    <Link to="messages">Messages</Link>
                    <br/>
                    <Link to="news">News</Link>
                </ul>

                <ul>
                    <Routes>
                        <Route path="messages/*" element={<Messages/>}/>
                        <Route path="news" element={<News/>}/>
                        {/* when the url is to the index page, it is equal to <Link to="/about"> is clicked */}
                        <Route path="/" element={<Navigate to="messages"/>}/>
                    </Routes>
                </ul>
            </>
        );
    }
}