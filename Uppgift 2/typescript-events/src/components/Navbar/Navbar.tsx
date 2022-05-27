import React, { FC } from 'react'
import './Navbar.css'



type NavProps = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar:FC<NavProps> = ({setShowModal}) => {
  return (
    <div className='navbar'>
      <div className='container d-flex justify-between'>
        <h1 className='title'>My Events</h1>
        <button className='btn btn-clear' onClick={() => setShowModal(true)}>Add New Event</button>
      </div>
    </div>
  )
}

export default Navbar