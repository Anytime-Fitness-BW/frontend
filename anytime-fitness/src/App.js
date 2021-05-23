import './App.css';
import React, { useState, useEffect } from 'react'
import { Route } from "react-router-dom";
import HomePage from './components/HomePage'
import axios from 'axios'
import * as yup from 'yup'
import ClientSignUpForm from './components/createClientAccount/signUpForm'
import { schema } from './components/createClientAccount/clientFormSchema'
import InstructorSignUp from './components/createInstructorAccount/InstructorSignUp';



/// INITIAL STATES ///
const initialClientFormValues = {
  /// TEXT INPUTS ///
  first_name: '',
  last_name: '',
  city: '',
  zipcode: '',
  username: '',
  email: '',
  password: '',
  /// CHECKBOX - TERMS OF SERVICE ///
  terms: false,
}

const initialInstructorFormValues = {
  /// TEXT INPUTS ///
  first_name: '',
  last_name: '',
  city: '',
  zipcode: '',
  username: '',
  email: '',
  password: '',
  /// CHECKBOX - TERMS OF SERVICE ///
  terms: false,
}

const initialClientsFormErrors = {
  first_name: '',
  last_name: '',
  city: '',
  zipcode: '',
  username: '',
  email: '',
  password: '',
  auth_code: '',
}

const initialInstructorFormErrors = {
  first_name: '',
  last_name: '',
  city: '',
  zipcode: '',
  username: '',
  email: '',
  password: '',
  auth_code: '',
}


function App() {
  //  CLIENT STATES //
  const [client, setClient] = useState([])                                               // array of client objects
  const [clientFormValues, setClientFormValues] = useState(initialClientFormValues)      // objects
  const [clientFormErrors, setClientFormErrors] = useState(initialClientsFormErrors)     // objects
  const [disabled, setDisabled] = useState(true)                                         // objects

  // INSTRUCTOR STATES //
  const [instructor, setInstructor] = useState([])                                               // array of instructor objects
  const [instructorFormValues, setInstructorFormValues] = useState(initialInstructorFormValues)     // objects
  const [instructorFormErrors, setInstructorFormErrors] = useState(initialInstructorFormErrors)     // objects
  const [instructorDisabled, setInstructorDisabled] = useState(true)                                // objects
  



  // HELPERS //
  const postNewClient = (newClient) => {
    axios.post('https://anytime-fitness-bw.herokuapp.com/', newClient)
      .then(({data}) => {
        setClient([data, ...client])
        console.log(data)
      })
      .catch(error => console.log('Error Posting Clients:', error))
  }

  const postNewInstructor = (newInstructor) => {
    axios.post('https://anytime-fitness-bw.herokuapp.com/', newInstructor)
      .then(({data}) => {
        setInstructor([data, ...instructor])
        console.log(data)
      })
      .catch(error => console.log('Error Posting Instructors:', error))
  }



  // EVENT HELPERS //
  const inputChanges = (name, value) => {
    yup.reach(schema, name)
       .validate(value)
       .then(() => setClientFormErrors({
         ...clientFormErrors,
         [name]: ''
       }))
       .catch(error => setClientFormErrors({
         ...clientFormErrors,
         [name]: error.errors[0]
       }))
      setClientFormValues({
        ...clientFormValues,
        [name]: value
      })
  }


const submitForm = () => {
  postNewClient(clientFormValues)
  console.log(postNewClient)
}


// SIDE EFFECT //
useEffect(() => {
  schema.isValid(clientFormValues).then((valid) => setDisabled(!valid));
}, [clientFormValues])







  return (
    <div className="App">
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route exact path='/register'>
        <ClientSignUpForm
          values = {clientFormValues}
          change = {inputChanges}
          submit = {submitForm}
          disabled = {disabled}
          errors = {clientFormErrors}
        />
      </Route>
      <Route path='/register/instructor'>
        <InstructorSignUp />
      </Route>
      <Route path='/login'></Route>
      <Route path='/dashboard'>
        {/* this leads to the client dashboard after the sign up process will change to the appropriate endpoint when provided with that information */}
      </Route>
      <Route path='/dashboard/instructor'>
        {/* this leads to the client dashboard after the sign up process will change to the appropriate endpoint when provided with that information */}
      </Route>

    </div>
  );
}

export default App;
