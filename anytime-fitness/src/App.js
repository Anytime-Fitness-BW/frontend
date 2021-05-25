import './App.css';
import React, { useState, useEffect } from 'react'
import { Route } from "react-router-dom";
import HomePage from './components/HomePage'
import axios from 'axios'
import * as yup from 'yup'
import ClientSignUpForm from './components/createClientAccount/signUpForm'
import { schema } from './components/createClientAccount/clientFormSchema'
import InstructorSignUp from './components/createInstructorAccount/InstructorSignUp'
import { instructorSchema } from './components/createInstructorAccount/instructorFormSchema'
import LoginForm from './components/login/loginForm'
import { loginSchema } from './components/login/loginSchema'
import ClientDashboard from './components/Client/ClientDashboard';
import InstructorDashboard from './components/instructor/InstructorDashboard'
import AddClass from './components/Client/AddClass'
import CreateClass from './components/instructor/CreateClass'
import MyClasses from './components/instructor/MyClasses'



/// INITIAL CLIENT STATES ///
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

/// INITIAL INSTRUCTOR STATES ///
const initialInstructorFormValues = {
  /// TEXT INPUTS ///
  first_name: '',
  last_name: '',
  city: '',
  zipcode: '',
  username: '',
  email: '',
  password: '',
  auth_code: '',
  /// CHECKBOX - TERMS OF SERVICE ///
  terms: false,
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

/// INITIAL LOGIN STATES ///
const initialLoginFormValues = {
  /// TEXT INPUTS ///
  username_or_email: '',
  password: '',
  auth_code: '',
  /// CHECKBOX - REMEMBER ME ///
  remember_me: false,
}

const initialLoginFormErrors = {
  username_or_email: '',
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

  //  LOGIN STATES //
  const [login, setLogin] = useState([])                                            // array of login objects
  const [loginFormValues, setLoginFormValues] = useState(initialLoginFormValues)    // objects
  const [loginFormErrors, setLoginFormErrors] = useState(initialLoginFormErrors)    // objects
  const [loginDisabled, setLoginDisabled] = useState(true)                          // objects
  



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

  const postNewLogin = (newLogin) => {
    axios.post('https://anytime-fitness-bw.herokuapp.com/', newLogin)
      .then(({data}) => {
        setLogin([data, ...login])
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

  const instructorInputChanges = (name, value) => {
    yup.reach(instructorSchema, name)
       .validate(value)
       .then(() => setInstructorFormErrors({
         ...instructorFormErrors,
         [name]: ''
       }))
       .catch(error => setInstructorFormErrors({
         ...instructorFormErrors,
         [name]: error.errors[0]
       }))
      setInstructorFormValues({
        ...instructorFormValues,
        [name]: value
      })
  }

  const loginInputChanges = (name, value) => {
    yup.reach(loginSchema, name)
       .validate(value)
       .then(() => setLoginFormErrors({
         ...loginFormErrors,
         [name]: ''
       }))
       .catch(error => setLoginFormErrors({
         ...loginFormErrors,
         [name]: error.errors[0]
       }))
      setLoginFormValues({
        ...loginFormValues,
        [name]: value
      })
  }


const submitForm = () => {
  postNewClient(clientFormValues)
  console.log(postNewClient)
}

const instructorSubmitForm = () => {
  postNewInstructor(instructorFormValues)
  console.log(postNewInstructor)
}

const loginSubmitForm = () => {
  postNewLogin(loginFormValues)
  console.log(postNewLogin)
}


// SIDE EFFECT //
useEffect(() => {
  schema.isValid(clientFormValues).then((valid) => setDisabled(!valid));
}, [clientFormValues])

useEffect(() => {
  instructorSchema.isValid(instructorFormValues).then((valid) => setInstructorDisabled(!valid));
}, [instructorFormValues])

useEffect(() => {
  loginSchema.isValid(loginFormValues).then((valid) => setLoginDisabled(!valid));
}, [loginFormValues])



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
        <InstructorSignUp
          instructorValues = {instructorFormValues}
          instructorChange = {instructorInputChanges}
          instructorSubmit = {instructorSubmitForm}
          instructorDisabled = {instructorDisabled}
          instructorErrors = {instructorFormErrors}
        />
      </Route>
      <Route path='/login'>
        <LoginForm 
          loginValues = {loginFormValues}
          loginChange = {loginInputChanges}
          loginSubmit = {loginSubmitForm}
          loginDisabled = {loginDisabled}
          loginErrors = {loginFormErrors}
        />
      </Route>
      <Route exact path='/dashboard'>
        <ClientDashboard/>
      </Route>
      <Route exact path="/dashboard/add">
        <AddClass />
      </Route>
      <Route exact path='/dashboard/instructor'>
        <InstructorDashboard />
      </Route>
      <Route exact path="/instructor/create">
        <CreateClass />
      </Route>
      <Route exact path="/instructor/classes">
        <MyClasses />
      </Route>
    </div>
  );
}

export default App;
