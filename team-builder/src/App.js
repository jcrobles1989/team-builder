import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';

const initialTeamMembers = [
  {firstName: 'John', lastName: 'Smith'},
  {firstName: 'Jane', lastName: 'Doe'}
]

function App() {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers)
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: ''
  })
  const onInputChange = event => {
    const inputThatChanged = event.target.name
    const newValueForInput = event.target.value
    setFormValues({
      ...formValues,
      [inputThatChanged]: newValueForInput,
    })
  }
  const onFormSubmit = event => {
    event.preventDefault()
    const newTeamMember = {
      // id: uuid(),
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      role: formValues.role
    }
    setTeamMembers([...teamMembers, newTeamMember])
    // setTeamMembers(teamMembers.concat(newTeamMember))
  }

  return (
    <div className="App">
      
      <h1>Team Members:</h1>
  {teamMembers.map(item => <h3 key={item.id}>{item.firstName} {item.lastName} {item.email} {item.role}</h3>)}
        
      <Form 
        onInputChange={onInputChange}
        formValues={formValues}
        onFormSubmit={onFormSubmit}
      />
    </div>
  )
}

export default App;
