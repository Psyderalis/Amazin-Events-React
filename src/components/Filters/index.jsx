import './styles/filters.css'
import SearchBar from './SearchBar'
import CheckboxesBar from './CheckboxesBar'

const Filters = ({ events, filteredEvents, setFilteredEvents, setSearchedEvent }) => {

  return (
    <div>
      <SearchBar
        filteredEvents={filteredEvents}
        setSearchedEvent={setSearchedEvent} />

      <CheckboxesBar
        events={events}
        setFilteredEvents={setFilteredEvents} />
    </div>
  )
}

export default Filters