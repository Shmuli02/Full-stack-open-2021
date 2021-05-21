import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import Display from './components/Display'
import Notification from './components/Notification'
import axios from 'axios'
import './index.css'
import personService from './services/persons'








const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response)
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
    Person.addPerson(event,persons,setPersons, setNewName, setNewNumber,setErrorMessage)
  }

  const handlePersonDelete = (event) => {
    Person.dellPerson(event,setPersons)
  }


  

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
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
      <h3>Numbers</h3>
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