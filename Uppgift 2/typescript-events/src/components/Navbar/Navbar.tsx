import React, { FC } from 'react'
import './Navbar.css'
const Navbar:FC = () => {
  return (
    <div className='navbar'>
        <div className='container d-flex justify-between'>
            <h1 className="title">My Events</h1>
            <button className="btn btn-clear"> Add new event</button>
        </div>
    </div>
  )
}

export default Navbar