import './styles/checkboxesBar.css'
import Checkbox from './Checkbox'
import { useEffect, useState } from 'react'

const CheckboxesBar = ({ events, setFilteredEvents }) => {

  let categories = []
  events.forEach(event => {
    if (!categories.includes(event.category)) categories.push(event.category)
  })

  const [selectedCategories, setSelectedCategories] = useState([])


  useEffect(() => {
    // console.log('categorías seleccionadas: ', selectedCategories)
    if (selectedCategories.length > 0) {
      setFilteredEvents(events.filter(event => selectedCategories.includes(event.category)))
    } else {
      setFilteredEvents(events)
    }
  }, [selectedCategories])


  const handleCheckboxChange = (value, isChecked) => {
    if (isChecked) {
      setSelectedCategories([...selectedCategories, value])
    } else {
      setSelectedCategories(selectedCategories.filter((category) => category !== value))
    }
  }


  return (
    <div className='checkboxes-bar'>
      {
        categories.map((category) => {

          return (
            <Checkbox
              key={category}
              value={category}
              handleCheckboxChange={handleCheckboxChange} />
          )
        })
      }
    </div>
  )
}

export default CheckboxesBar