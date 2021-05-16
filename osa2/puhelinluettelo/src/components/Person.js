import personService from '../services/persons'

const addPerson = (event,persons,setPersons, setNewName, setNewNumber,setErrorMessage) => {
    const newName = event.target[0].value
    const newNumber = event.target[1].value
    const found = persons.find(element => element.name === newName);
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (found===undefined) {
      personService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(personObject))
          setNewName('')
          setNewNumber('')
          setErrorMessage(`Added ${personObject.name}`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 3000)
        })
    
    }
    else {
      if (window.confirm(`${newName} is already added to phonebook, replacethe old number with a new one?`)) {
        console.log('kylla')
        console.log(found)
        editPerson(event,personObject,found.id)

      }
    }
    
  
  }
const editPerson = (event,personObject,id) => {
  personService
    .put(personObject,id)
}

const dellPerson = (event) => {
    if (window.confirm(`Delete`)) {
      personService.dell(event.target.value).then(response => {
      })
    }
}

export default {addPerson,editPerson,dellPerson}