import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';

const initialTeamMembers = [
  {firstName: 'John', lastName: 'Smith', email: 'johnsmith@gmail.com', role: 'Team Lead'},
  {firstName: 'Jane', lastName: 'Doe', email: 'janedoe@gmail.com', role: 'Project Lead'}
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
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      role: formValues.role
    }
    setTeamMembers([...teamMembers, newTeamMember])
  }

  return (
    <div className="App">
      
      <h1>Team Members:</h1>
  {teamMembers.map(item => <p key={item.id}>Name: {item.firstName} {item.lastName} Email: {item.email} Role: {item.role}</p>)}
        
      <Form 
        onInputChange={onInputChange}
        formValues={formValues}
        onFormSubmit={onFormSubmit}
      />
    </div>
  )
}

export default App;
