import './styles/home.css'

import Filters from '../../components/Filters'
import CardsContainer from '../../components/CardsContainer'

import { useEffect, useState } from 'react'

const Home = ({ data, eventsFilter }) => {

  const [title, setTitle] = useState('')

  const [events, setEvents] = useState([])

  const [filteredEvents, setFilteredEvents] = useState([])

  const [searchedEvent, setSearchedEvent] = useState(null)

  useEffect(() => {

    switch (eventsFilter) {
      case 'all':
        const allEvents = data.events
        setEvents(allEvents)
        setFilteredEvents(allEvents)
        setTitle(`Todos los eventos (${allEvents.length})`)
        break

      case 'past':
        const pastEvents = data.events.filter(event => data.currentDate > event.date)
        setEvents(pastEvents)
        setFilteredEvents(pastEvents)
        setTitle(`Eventos pasados (${pastEvents.length})`)
        break

      case 'upcoming':
        const upcomingEvents = data.events.filter(event => data.currentDate <= event.date)
        setEvents(upcomingEvents)
        setFilteredEvents(upcomingEvents)
        setTitle(`Eventos próximos (${upcomingEvents.length})`)
        break
    }
  }, [eventsFilter])

  return (
    <main className='home'>
      <h2>{title}</h2>
      <Filters
        events={events}
        filteredEvents={filteredEvents}
        setFilteredEvents={setFilteredEvents}
        searchedEvent={searchedEvent}
        setSearchedEvent={setSearchedEvent} />

      <CardsContainer
        filteredEvents={filteredEvents}
        searchedEvent={searchedEvent} />
    </main>

  )
}

export default Home