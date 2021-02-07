import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return ( 
        <>
        <Link to={{pathname:'/student'}}><h1>Student</h1></Link>
        <Link to={{pathname:'/canteen'}}><h1>Canteen</h1></Link>
        </>
     );
}
 
export default HomePage;