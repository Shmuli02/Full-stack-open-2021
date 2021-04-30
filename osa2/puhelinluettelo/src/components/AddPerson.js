import React from 'react'

const AddPerson = (event,persons,setPersons) => {
    const newName = event.target[0].value
    const newNumber = event.target[1].value
    const found = persons.find(element => element.name === newName);
    
    if (found===undefined) {
      const personObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
    
    }
    else {
      alert(`${newName} is already added to phonebook`)
    }
    
  
  }

export default AddPerson