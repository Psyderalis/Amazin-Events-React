import './styles/checkbox.css'

const Checkbox = ({ value, handleCheckboxChange }) => {

  return (
    <div className='checkbox'>
      <label >{value}</label>
      <input
        type="checkbox"
        value={value}
        onChange={(e) => handleCheckboxChange(value, e.target.checked)} />
    </div>
  )
}

export default Checkbox