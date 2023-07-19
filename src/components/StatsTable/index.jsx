import { useEffect, useState } from 'react';
import './styles/statsTable.css'

const StatsTable = ({ type, categories }) => {

  const [title, setTitle] = useState('')
  const [assistanceTitle, setAssistanceTitle] = useState('')
  const [revenueTitle, setRevenueTitle] = useState('')

  useEffect(() => {
    switch (type) {
      case 'past':
        setTitle('Eventos pasados según categoría:')
        setAssistanceTitle('Asistencia (%)')
        setRevenueTitle('Ganancias ($)')
        break
  
      case 'upcoming':
        setTitle('Eventos próximos según categoría:')
        setAssistanceTitle('Asistencia estimada (%)')
        setRevenueTitle('Ganancias estimadas ($)')
        break
    }
  }, [type])

  return (
    <>
      <h3>{title}</h3>
      <table>
        <thead>
          <tr>
            <th>Categoría</th>
            <th>{revenueTitle}</th>
            <th>{assistanceTitle}</th>
          </tr>
        </thead>
        {
          categories.map(category => {
            return (
              <tbody key={category.name}>
                <tr>
                  <td>{category.name}</td>
                  <td>{category.totalRevenue}</td>
                  <td>{parseInt(category.totalAssistance / category.totalCapacity * 100)}</td>
                </tr>
              </tbody>
            )
          })
        }
      </table>
    </>
  )
}

export default StatsTable