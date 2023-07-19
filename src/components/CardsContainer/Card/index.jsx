import './styles/card.css'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <Link to={props.path} className='card-link'>
      <div className="card">
        <h3>{props.name}</h3>
        <p>Fecha: {props.date}</p>
        <p>{props.description}</p>
        <p>Categoría: {props.category}</p>
        <p>Lugar: {props.place}</p>
        <p> Capacidad: {props.capacity}</p>
        {props.assistance ? (<p>Asistencia: {props.assistance}</p>) : (<p>Asistencia estimada: {props.estimate}</p>)}
      </div>
    </Link>

  )
}

export default Card