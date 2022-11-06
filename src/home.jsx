import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';



function Home() {
  return (
   
      <div className="counter-home">
      <nav className="count-nav">
        <div className="count-logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnTApiz5x9Vqb1Yr7nS82n5JogCt_IuYDT8AwDAtwa5WLu776hWiZZoQsXdBvhUPy2dqQ&usqp=CAU"
            alt="counter-logo"
          />
        </div>
        <ul className="count-lists">
          <li className="count-list">
            <Link className="countss" to="/">
              Home
            </Link>
          </li>
          <li className="count-list">
            <Link className="countss" to="/UseCounter">
              customHooks
            </Link>
          </li>
          <li className="count-list">
            <Link className="countss" to="/Reducer">
              useReducer
            </Link>
          </li>
        </ul>
      </nav>

      <div className="main-content">
        <div className="countHome">
          <h1 className="count-header">A Simple counter</h1>
          <p className="counter-text">
            A Simple Counter App is an App that allows users to update the
            displayed count number by triggering the number count buttons to add
            or deduct.
          </p>
          <button className="counts-btn">
            <Link to="/UseCounter" className='count-btn'>GET STARTED NOW</Link>
          </button>
        </div>
       
      </div>
    </div>
    
  );
}

export default Home