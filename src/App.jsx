import './App.css'

import axios from 'axios'

import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

import Header from './components/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Stats from './pages/Stats'
import Details from './pages/Details'
import Contact from './pages/Contact'

function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('https://mindhub-xj03.onrender.com/api/amazing')
      .then(response => {
        setData(response.data)
      })
      .catch(error => console.log(error))
  }, [])

  if (!data) {
    return (
      <main>
        <h1 className='loading'>Cargando...</h1>
      </main>
    )
  }

  return (
    <>
      <Header />
      <Routes>
        {/* <Switch> */}
        <Route path='/' element={<Home data={data} eventsFilter={'all'} />} />
        <Route path='/past' element={<Home data={data} eventsFilter={'past'} />} />
        <Route path='/upcoming' element={<Home data={data} eventsFilter={'upcoming'} />} />
        <Route path='/details/:id' element={<Details events={data.events} />} />
        <Route path='/stats' element={<Stats data={data} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
        {/* </Switch> */}
      </Routes>
    </>
  )
}

export default App 
