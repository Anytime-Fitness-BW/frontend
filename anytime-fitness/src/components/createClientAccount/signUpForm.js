import React from 'react'
import { useHistory, Link } from "react-router-dom";



export default function ClientSignUpForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const history = useHistory();

    const onSubmit = event => {
        event.preventDefault()
        submit()
        history.push('/dashboard')
    }

    const onChange = (event) => {
        const { name, value, checked, type } = event.target;
        const inputValue = type === "checkbox" ? checked : value;
        change(name, inputValue);
    }



    return (
        <form  id='signUpForm' onSubmit={onSubmit}>
            <nav>
                <h1></h1>
                <div className='nav-links'>
                    <Link to='/'>Home</Link>
                </div>
            </nav>
            <div>
                <img
                    className='form-image'
                    src='https://pic.onlinewebfonts.com/svg/img_401900.png'
                    alt='user.img'
                />
                <hr className='hr'/>
                <h4> Create an Account </h4>
                <hr className='hr2'/>
            </div>
            <div className='form-container'>
                <section className='first-four-text-inputs'>
                    <label> 
                        <input 
                            value={values.first_name} 
                            onChange={onChange} 
                            name="first_name" 
                            type="text" 
                            placeholder="First Name"
                         />  
                     </label><br/> <br/>
                     <label>&nbsp;&nbsp;&nbsp;
                         <input 
                            value={values.last_name}
                            onChange={onChange}
                            name="last_name"
                            type="text"
                            placeholder='Last Name'
                         />
                     </label><br/><br/>
                     <label>
                         <input 
                            value={values.city}
                            onChange={onChange}
                            name="city"
                            type='text'
                            placeholder='City'
                         />
                     </label><br/><br/>
                     <label>&nbsp;&nbsp;&nbsp;
                        <input 
                            value={values.zipcode}
                            onChange={onChange}
                            name='zipcode'
                            type='text'
                            placeholder='Zipcode'
                        />
                     </label><br/><br/>
                </section>

                <section className='text-inputs'>
                    <label>
                        <input 
                            value={values.username}
                            onChange={onChange}
                            name='username'
                            type='text'
                            placeholder='Username'
                            size='47'
                        />
                    </label><br/><br/>
                    <label>
                        <input 
                            value={values.email}
                            onChange={onChange}
                            name='email'
                            type='email'
                            placeholder='Email'
                            size='47'
                        />
                    </label><br/><br/>
                    <label>
                        <input 
                            value={values.password}
                            onChange={onChange}
                            name='password'
                            type='password'
                            placeholder='Password'
                            size='47'
                        />
                    </label><br/><br/>
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
                    <p className='checkbox-text'>I agree to the Terms of Service and Privacy Policy</p>
                </section>

                <section>
                    <button disabled={disabled} id='submit-button'>
                        CREATE ACCOUNT
                    </button>
                    <div className='bottom-text'>
                        <p>Already have an account?</p>
                        <Link className='bottom-text-link' to='/login'>Login here</Link>
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
    )
}