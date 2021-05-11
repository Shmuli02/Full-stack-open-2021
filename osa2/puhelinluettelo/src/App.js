import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import Display from './components/Display'
import axios from 'axios'








const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    Person.addPerson(event,persons,setPersons, setNewName, setNewNumber)
  }

  const handlePersonDelete = (event) => {
    Person.dellPerson(event)
  }


  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handlePhoneChange}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
      <div>
          <Display key={person.name} person={person}/>
          <button value={person.id} onClick={handlePersonDelete}>Delete</button>
        </div>
        )}
    </div>
  )
}

export default App