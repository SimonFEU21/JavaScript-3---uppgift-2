import React, { FC, useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import IEvent from '../models/IEvent'



const EventDetails:FC = () => {

  const { id } = useParams()
  const [url] = useState<string>('http://localhost:8080/events/' + id)

  const [event, setEvent] = useState<IEvent | null>(null)

  const getEvent = useCallback(
    async () => {
      const { data, status } = await axios.get<IEvent>(url)
      if(status === 200) {
        setEvent(data)
      }
    }, [url]
  )

  useEffect(() => {
    getEvent()
  }, [getEvent])

  return (
    <div>
      <h2>{event?.title}</h2>
      <p>{event?.description}</p>
    </div>
  )
}

export default EventDetails