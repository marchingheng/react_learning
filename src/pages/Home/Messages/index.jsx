import React from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Details from './Details';
export default class Messages extends React.Component {
    messageArr = [
        {id: 1},
        {id: 2},
        {id: 3}
    ]
    render() {
        return (
            <>
                <ul>
                    {
                        this.messageArr.map((messageObj)=>{
                            const {id} = messageObj
                            return (
                                <li key={id}>
                                    <Link to={id.toString()}>message_{id}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <Routes>
                    <Route path=":id" element={<Details />}></Route>
                    <Route path="/" element={<Navigate to={this.messageArr[0].id.toString()}/>}></Route>
                </Routes>
            </>
        );
    }
}