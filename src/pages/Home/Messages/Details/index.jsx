import React from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';

const DetailsArr = [
    {id: 1, title: "I love React", body: "testtesttest"},
    {id: 2, title: "I love RoR", body: "testtesttest"},
    {id: 3, title: "I love GQL", body: "testtesttest"}
]

const findDetail = (id)=>{
    return DetailsArr.find(detailsObj => detailsObj.id == id)
}

const Details = () => {
    const {id: message_id} = useParams();// get params from route
    const details = findDetail(message_id)
    return (
        <>
            <h1>{details.title}</h1>
            <h3>message#: {details.id}</h3>
            <h2>{details.body}</h2>
        </>
    );
}

export default Details