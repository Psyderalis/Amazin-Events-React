import './styles/contact.css'

const Contact = () => {

  const handleSubmit = (e) => e.preventDefault()

  return (
    <>
      <form className='contact-form'>
        <h2>Contacto</h2>
        <label>
          Nombre:
          <input type="text" />
        </label>
        <label>
          Email:
          <input type="text" />
        </label>
        <label>
          Mensaje:
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </label>
        <button onClick={handleSubmit}>Enviar</button>
      </form>
    </>
  )
}

export default Contact