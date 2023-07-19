import './styles/details.css'
import { useParams } from "react-router-dom"
import Card from "../../components/CardsContainer/Card"

const Details = ({ events }) => {

  const params = useParams()

  const eventDetailed = events.find(event => event._id == params.id)

  return (
    <div className='details-container'>
      <Card
        name={eventDetailed.name}
        date={eventDetailed.date}
        description={eventDetailed.description}
        category={eventDetailed.category}
        place={eventDetailed.place}
        capacity={eventDetailed.capacity}
        assistance={eventDetailed.assistance}
        estimate={eventDetailed.estimate} />

      <img src={eventDetailed.image} alt={`Fotografía de ${eventDetailed.name}`} />

    </div>
  )
}

export default Details