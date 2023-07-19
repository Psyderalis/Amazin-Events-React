import './styles/navButton.css'

import { Link } from 'react-router-dom'

const NavButton = (props) => {
  return <Link className='nav-btn' to={props.path}>{props.name}</Link>
}

export default NavButton