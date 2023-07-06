import React from 'react'
import {useParams} from 'react-router-dom'
import {events} from './events.js'

const Event = () => {
    const {eventId} = useParams();
    // finding the event
    const event = events.find((event)=> event.id === Number(eventId))
  return (
    <div>
      
    </div>
  )
}

export default Event
