import { useEffect, useRef, useState } from 'react'
import './styles/searchbar.css'

const SearchBar = ({ filteredEvents, setSearchedEvent }) => {

  let searchInput = useRef()

  const [notFoundMessage, setNotFoundMessage] = useState('')

  const showNotFoundMsg = () => {
    setNotFoundMessage('⛔ La búsqueda no coincide con ningún evento.')
    setTimeout(() => { setNotFoundMessage('') }, 2000)
  }

  const handleBtnClick = () => {
    const searchValue = searchInput.current.value

    if (searchValue.length > 0) {

      const searchedEventArr = filteredEvents.filter(event => event.name.toLowerCase().includes(searchValue.toLowerCase()))

      searchedEventArr.length > 0 ? setSearchedEvent(searchedEventArr) : showNotFoundMsg()

    } else { setSearchedEvent(null) }
  }

  return (
    <div className='search-bar-container'>
      <div className='search-bar'>
        <label htmlFor="search">Nombre:</label>
        <input ref={searchInput} type="text" name="" id="search" />
        <button onClick={handleBtnClick}>Buscar</button>
      </div>
      <p>{notFoundMessage}</p>
    </div>
  )
}

export default SearchBar