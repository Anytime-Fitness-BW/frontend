import React from 'react'
import { useHistory, Link } from "react-router-dom";
import './Form.css'


function InstructorSignUp(props) {
    const {
        instructorValues,
        instructorChange,
        instructorSubmit,
        instructorDisabled,
        instructorErrors,
    } = props

    const history = useHistory();

    const onSubmit = event => {
        event.preventDefault()
        instructorSubmit()
        history.push('/dashboard/instructor')
    }

    const onChange = (event) => {
        const { name, value, checked, type } = event.target;
        const inputValue = type === "checkbox" ? checked : value;
        instructorChange(name, inputValue);
    }



    return (
        <div className='form'>
            <form id='signUpForm' onSubmit={onSubmit}>
                <nav>
                    <h1></h1>
                    <div className='nav-links'>
                        <Link to='/' style={{ color: 'white', textDecoration: 'underline' }}>Home</Link>
                    </div>
                </nav>
                <div className='form-container'>
                    <h4 className='signup-title' style={{ marginLeft: '.01rem', fontSize: '1.3rem' }}> Create an Account </h4>
                    <section className='first-four-text-inputs'>
                        <div className='first-two-text-inputs'>
                            <label>
                                <input
                                    className='new-text-inputs'
                                    value={instructorValues.first_name}
                                    onChange={onChange}
                                    name="first_name"
                                    type="text"
                                    placeholder="First Name"
                                />
                            </label><br /> <br />
                            <label>&nbsp;&nbsp;&nbsp;
                                <input
                                    className='new-text-inputs second-row'
                                    value={instructorValues.last_name}
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
                                    value={instructorValues.city}
                                    onChange={onChange}
                                    name="city"
                                    type='text'
                                    placeholder='City'
                                />
                            </label><br /><br />
                            <label>&nbsp;&nbsp;&nbsp;
                                <input
                                    className='new-text-inputs second-row'
                                    value={instructorValues.zipcode}
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
                                value={instructorValues.username}
                                onChange={onChange}
                                name='username'
                                type='text'
                                placeholder='Username'
                            />
                        </label><br /><br />
                        <label>
                            <input
                                className='new-text-inputs2'
                                value={instructorValues.email}
                                onChange={onChange}
                                name='email'
                                type='email'
                                placeholder='Email'
                            />
                        </label><br /><br />
                        <label>
                            <input
                                className='new-text-inputs2'
                                value={instructorValues.password}
                                onChange={onChange}
                                name='password'
                                type='password'
                                placeholder='Password'
                            />
                        </label><br /><br />
                        <label>
                            <input
                                 className='new-text-inputs2'
                                value={instructorValues.auth_code}
                                onChange={onChange}
                                name='auth_code'
                                type='text'
                                placeholder='Authorization Code'
                            />
                        </label><br /><br />
                    </section>

                    <section className='checkbox'>
                        <label>
                            <input
                                className='checkbox-square'
                                type='checkbox'
                                checked={instructorValues.terms}
                                name='terms'
                                onChange={onChange}
                            />
                        </label>
                        <p className='checkbox-text'>I agree to the Terms of Service and Privacy Policy</p>
                    </section>

                    <section>
                        <button className='button' disabled={instructorDisabled} id='submit-button' style={{ color: 'black' }}>
                            CREATE ACCOUNT
                </button>
                        <div className='bottom-text'>
                            <p>Already have an account?</p>
                            <Link className='bottom-text-link' to='/login'>Login here</Link>
                        </div>
                        <div>
                            <div>{instructorErrors.last_name}</div>
                            <div>{instructorErrors.city}</div>
                            <div>{instructorErrors.zipcode}</div>
                            <div>{instructorErrors.username}</div>
                            <div>{instructorErrors.email}</div>
                            <div>{instructorErrors.password}</div>
                        </div>
                    </section>
                </div>
            </form>
        </div>
    )
}

export default InstructorSignUp;