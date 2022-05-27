import React, { FC, useState, useRef } from 'react'
import IEvent from '../../models/IEvent'
import './AddEventModal.css'
import axios from 'axios'

type props = {
  closeModal: () => void,
  addEvent: (event: IEvent) => Promise<void>
}



// Validering

const AddEventModal:FC<props> = ({ closeModal, addEvent }) => {


  const [verification, setVerification] = useState(true)
  

  const handleSubmit:React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    if(formData.title === '' || time === '') {
      setVerification(false);
      console.log('error');
      return
    } else {
      setVerification(true)
    }
    
    const event:IEvent = {...formData, timestamp: Date.parse(time)}
    
    addEvent(event)
    
  }
    

  const [formData, setFormData] = useState<IEvent> ({
    title: '',
    description: '',
    timestamp: 0
  })  

  const [time, setTime] = useState ('')

  
  const bgRef = useRef<HTMLDivElement> (null)
  
  const handleClick:React.MouseEventHandler<HTMLDivElement> = (e) => {
    if(e.target === bgRef.current) {
      closeModal()
    }  
  }  
  
  const handleChange:React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    setFormData(state => {
      return {...state,
        [e.target.name]: e.target.value
      }  
    })  
  }  
  

  return (
    <div className='modal-bg' onClick={handleClick} ref={bgRef}>
      <div className="modal">
        <button onClick={() => closeModal()} className='btn btn-big r-corner'>X</button>
        <h2 className='modal-title'>Add Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="title">Title: </label>
            <input type="text" className='form-control' id='title' name="title" value={formData.title} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label htmlFor="timestamp">Date: </label>
            <input type="datetime-local" className='form-control' id='timestamp' name="timestamp" value={time} onChange={(e) => setTime(e.target.value)} />
          </div>
          <div className="input-group">
            <label htmlFor="desc">Description: </label>
            <textarea className='form-control' name="description" id="desc" cols={30} rows={10} value={formData.description} onChange={handleChange}></textarea>
          </div>
          <div className='d-flex'>
            <button className='btn btn-outline ml-auto'>Add Event</button>
          </div>
         <div className='err-msg'>{!verification &&  <p>You must fill out everything!</p>} </div> 
        </form>
      </div>
    </div>
  )
}

export default AddEventModal