import axios from 'axios';
import React, { useState } from 'react'
import { useHistory, Link } from "react-router-dom";
import axiosWithAuth from '../../utils/axiosWithAuth';
import './Form.css'

const initialState = [{
    username: "",
    password: "",
    auth: "0",
    first_name: "",
    last_name: "",
    city: "",
    zipcode: "",
    email: "",
    terms: false
}]

export default function ClientSignUpForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props
const [register, setRegister] = useState(initialState)


    const history = useHistory();

    const onSubmit = event => {
        event.preventDefault()
        axiosWithAuth()
            .post('/api/auth/register', {username: values.username, password: values.password} )
            .then(res=>{
                setRegister(res.data.data) 
                history.push('/dashboard') 
            })
            .catch(err=>{
                console.log({err})
            })

        
    }

    const onChange = (event) => {
        const { name, value, checked, type } = event.target;
        const inputValue = type === "checkbox" ? checked : value;
        change(name, inputValue);
    }



    return (
        <div className='form1'>
            <form id='signUpForm' onSubmit={onSubmit}>
                <nav>
                    <h1></h1>
                    <div className='nav-links'>
                        <Link to='/' style={{ color: 'white', textDecoration: 'underline' }}>Home</Link>
                    </div>
                </nav>
                <div className='form-container'>
                <h4 className='signup-title mini-header' style={{ marginLeft: '.01rem', fontSize: '1.3rem'}}> Create an Account </h4>
                    <section className='first-four-text-inputs'>
                        <div className='first-two-text-inputs'>
                            <label>
                                <input
                                    className='new-text-inputs'
                                    value={values.first_name}
                                    onChange={onChange}
                                    name="first_name"
                                    type="text"
                                    placeholder="First Name"
                                />
                            </label><br /> <br />
                            <label>&nbsp;&nbsp;&nbsp;
                                <input
                                    className='new-text-inputs second-row'
                                    value={values.last_name}
                                    onChange={onChange}
                                    name="last_name"
                                    type="text"
                                    placeholder='Last Name'
                                />
                            </label><br /><br />
                        </div>
                        <div className='last-two-text-inputs'>
                            <label>
                                <input
                                    className='new-text-inputs'
                                    value={values.city}
                                    onChange={onChange}
                                    name="city"
                                    type='text'
                                    placeholder='City'
                                />
                            </label><br /><br />
                            <label>&nbsp;&nbsp;&nbsp;
                        <input
                                    className='new-text-inputs second-row'
                                    value={values.zipcode}
                                    onChange={onChange}
                                    name='zipcode'
                                    type='text'
                                    placeholder='Zipcode'
                                />
                            </label><br /><br />
                        </div>
                    </section>

                    <section className='text-inputs'>
                        <label>
                            <input
                                className='new-text-inputs2'
                                value={values.username}
                                onChange={onChange}
                                name='username'
                                type='text'
                                placeholder='Username'
                            />
                        </label><br /><br />
                        <label>
                            <input
                                className='new-text-inputs2'
                                value={values.email}
                                onChange={onChange}
                                name='email'
                                type='email'
                                placeholder='Email'
                                size='47'
                            />
                        </label><br /><br />
                        <label>
                            <input
                                className='new-text-inputs2'
                                value={values.password}
                                onChange={onChange}
                                name='password'
                                type='password'
                                placeholder='Password'
                                size='47'
                            />
                        </label><br /><br />
                    </section>

                    <section className='checkbox'>
                        <label>
                            <input
                                className='checkbox-square'
                                type='checkbox'
                                checked={values.terms}
                                name='terms'
                                onChange={onChange}
                            />
                        </label>
                        <p className='checkbox-text' style={{ color: 'black' }}>I agree to the Terms of Service and Privacy Policy</p>
                    </section>

                    <section>
                        <button className='button' disabled={disabled} id='submit-button' style={{ color: 'black' }}>
                            CREATE ACCOUNT
                    </button>
                        <div className='bottom-text'>
                            <p style={{ color: 'black' }}>Already have an account?</p>
                            <Link className='bottom-text-link' to='/login' style={{ color: 'black' }}>Login here</Link>
                        </div>
                        <div>
                            <div>{errors.first_name}</div>
                            <div>{errors.last_name}</div>
                            <div>{errors.city}</div>
                            <div>{errors.zipcode}</div>
                            <div>{errors.username}</div>
                            <div>{errors.email}</div>
                            <div>{errors.password}</div>
                        </div>
                    </section>
                </div>
            </form>
            <div className='space'>
                <div>space</div>
                <div>space</div>
                <div>space</div>
                <div>space</div>
            </div>
        </div>
    )
}
