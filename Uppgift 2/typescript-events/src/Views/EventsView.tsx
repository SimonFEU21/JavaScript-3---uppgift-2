import React, { FC, useState } from 'react'
import axios from 'axios'
import IEvent from '../models/IEvent'

const EventsView:FC = () => {

const [url] = useState <string> ('http://localhost:8080/events')

const [events, setEvents = useState<IEvent[]>([])

  return (
    <div></div>
  )
}

export default EventsView