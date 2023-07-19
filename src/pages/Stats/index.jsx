import { useState } from 'react'
import StatsTable from '../../components/StatsTable'
import './styles/stats.css'

const Stats = ({ data }) => {

  const maxAssistanceEvent = data.events.reduce((max, event) => {
    const percentageAssistance = event.assistance / event.capacity * 100
    return percentageAssistance > (max.assistance / max.capacity * 100) ? event : max
  })
  const minAssistanceEvent = data.events.reduce((min, event) => {
    const percentageAssistance = event.assistance / event.capacity * 100
    return percentageAssistance < (min.assistance / min.capacity * 100) ? event : min
  })
  const maxCapacityEvent = data.events.reduce((max, event) => event.capacity > max.capacity ? event : max)

  const pastEvents = data.events.filter(event => data.currentDate > event.date)
  const upcomingEvents = data.events.filter(event => data.currentDate <= event.date)

  const updateCategoriesData = (categoriesArr, event) => {
    const eventRevenue = (event.assistance ? event.assistance : event.estimate) * event.price
    categoriesArr.forEach(category => {
      if (category.name === event.category) {
        category.totalRevenue += eventRevenue
        category.totalCapacity += event.capacity
        category.totalAssistance += event.assistance ? event.assistance : event.estimate
      }
    })
  }
  
  const getCategoriesData = (eventsArr) => {
    let categoriesArr = []

    eventsArr.forEach(event => {
      const isInclude = categoriesArr.some(obj => obj.name === event.category)

      const categoryObj = { name: event.category, totalRevenue: 0, totalCapacity: 0, totalAssistance: 0 }

      if (!isInclude) categoriesArr.push(categoryObj)

      updateCategoriesData(categoriesArr, event)
    })
    return categoriesArr
  }

  const pastCategoriesData = getCategoriesData(pastEvents)
  const upcomingCategoriesData = getCategoriesData(upcomingEvents)

  return (
    <div className='stats-container'>
      <h2 className="title">Estadísticas de los eventos</h2>
      <table>
        <thead>
          <tr>
            <th>Evento con mayor porcentaje de asistencia</th>
            <th>Evento con menor porcentaje de asistencia</th>
            <th>Evento con mayor capacidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td id="highestAssistance">{maxAssistanceEvent.name}</td>
            <td id="lowestAssistance">{minAssistanceEvent.name}</td>
            <td id="highestCapacity">{maxCapacityEvent.name}</td>
          </tr>
        </tbody>
      </table>

      <StatsTable
        type={'past'}
        categories={pastCategoriesData} />

      <StatsTable
        type={'upcoming'}
        categories={upcomingCategoriesData} />
    </div>
  )
}

export default Stats