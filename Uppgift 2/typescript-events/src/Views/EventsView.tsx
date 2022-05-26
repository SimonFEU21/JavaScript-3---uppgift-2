import { FC } from 'react'
import IEvent from '../models/IEvent'
import EventCard from '../components/Events/EventCard'



type props = {
  events: IEvent[]
}

const EventsView:FC<props> = ({events}) => {


  return (
    <div className='events-view'>
      {!events.length && <p>No events to show</p>}
      { events.map(evt => (
        <EventCard evt={evt} key={evt.id} />
      )) }
    </div>
  )
}

export default EventsView