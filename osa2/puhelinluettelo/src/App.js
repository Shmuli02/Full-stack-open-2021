import React, { useState, useEffect } from 'react'
import AddPerson from './components/AddPerson'
import Display from './components/Display'
import axios from 'axios'








const App = () => {
  const [persons, setPersons] = useState([])
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

  const handeFormSubmit = (event) => {
    event.preventDefault()
    AddPerson(event,persons,setPersons)
    setNewName('')
    setNewNumber('')
    
  }


  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handeFormSubmit}>
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
        <Display key={person.name} person={person}/>
        )}
    </div>
  )
}

export default App