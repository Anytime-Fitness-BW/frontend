import './App.css';
import CreateClass from './components/instructor/CreateClass';
import React, { useState, useEffect } from 'react'
import {  Route, Link } from "react-router-dom";
import HomePage from './components/HomePage'
import axios from 'axios'
import * as yup from 'yup'
import ClientSignUpForm from './components/createClientAccount/signUpForm'
import { schema } from './components/createClientAccount/clientFormSchema'



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

const initialClientsFormErrors = {
  first_name: '',
  last_name: '',
  city: '',
  zipcode: '',
  username: '',
  email: '',
  password: '',
}


function App() {
  // STATES //
  const [client, setClient] = useState([])                                               // array of order objects
  const [clientFormValues, setClientFormValues] = useState(initialClientFormValues)      // objects
  const [clientFormErrors, setCLientFormErrors] = useState(initialClientsFormErrors)     // objects
  const [disabled, setDisabled] = useState(true)                                         // objects



  // HELPERS //
  const postNewClient = (newClient) => {
    axios.post('https://anytime-fitness-bw.herokuapp.com/')
      .then(({data}) => {
        setClient([data, ...client])
        console.log(data)
      })
      .catch(error => console.log('Error Posting Clients:', error))
  }



  // EVENT HELPERS //
  const inputChanges = (name, value) => {
    yup.reach(schema, name)
       .validate(value)
       .then(() => setCLientFormErrors({
         ...clientFormErrors,
         [name]: ''
       }))
       .catch(error => setCLientFormErrors({
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
      <Route path='/register'>
        <ClientSignUpForm
          values = {clientFormValues}
          change = {inputChanges}
          submit = {submitForm}
          disabled = {disabled}
          errors = {clientFormErrors}
        />
      </Route>
      <Route path='/register'></Route>
      <Route path='/login'></Route>
      <Route path='/dashboard'>
        {/* this leads to the client dashboard after the sign up process will change to the appropriate endpoint when provided with that information */}
      </Route>
    </div>
  );
}

export default App;
