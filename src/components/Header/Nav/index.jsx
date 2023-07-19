import './styles/nav.css'
import NavButton from "./NavButton"

const Nav = ({ showMenu }) => {

  return (
    <nav className='nav-bar'>

      {showMenu && <div className='links-container'>
        <NavButton
          path={'/past'}
          name={'Eventos Pasados ⬅️'} />

        <NavButton
          path={'/'}
          name={'HOME 🏠'} />

        <NavButton
          path={'/upcoming'}
          name={'Próximos Eventos ➡️'} />

        <NavButton
          path={'/stats'}
          name={'Estadísticas 📊'} />

<NavButton
          path={'/contact'}
          name={'Contacto 💌'} />
      </div>}

    </nav>
  )
}

export default Nav