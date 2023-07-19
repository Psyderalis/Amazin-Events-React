import './styles/cardsContainer.css'

import Card from './Card'

const CardsContainer = ({ filteredEvents, searchedEvent }) => {

  const eventsToPrint = searchedEvent ? searchedEvent : filteredEvents

  return (
    <div className='card-container'>
      {
         eventsToPrint.map((event) => {
          return (
            <Card
              key={event._id}
              name={event.name}
              date={event.date}
              description={event.description}
              category={event.category}
              place={event.place}
              capacity={event.capacity}
              assistance={event.assistance}
              estimate={event.estimate}
              path={`/details/${event._id}`} />
          )
        })
      }
    </div>
  )
}

export default CardsContainer