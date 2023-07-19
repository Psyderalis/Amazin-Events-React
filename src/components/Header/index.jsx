import './styles/header.css'
import Nav from "./Nav"

import { useState } from 'react'


const Header = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <header>
      <div className='title-menu'>
        <h3>Amazing Events ✨</h3>
        <p onClick={toggleMenu} className='menu-btn'>Menú</p>
      </div>

      <Nav showMenu={showMenu} />
    </header>
  )
}

export default Header