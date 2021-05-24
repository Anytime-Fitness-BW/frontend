import React from 'react'
import { useHistory, Link } from "react-router-dom";



export default function LoginForm(props) {
    const {
        loginValues,
        loginChange,
        loginSubmit,
        loginDisabled,
        loginErrors,
    } = props

    const history = useHistory();

    const onSubmit = event => {
        event.preventDefault()
        loginSubmit()
        history.push('/dashboard')
    }

    const onChange = (event) => {
        const { name, value, checked, type } = event.target;
        const inputValue = type === "checkbox" ? checked : value;
        loginChange(name, inputValue);
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
                    className='login-image'
                    src='https://pic.onlinewebfonts.com/svg/img_401900.png'
                    alt='user.img'
                />
                <hr className='hr'/>
                <h4> Sign In </h4>
                <hr className='hr2'/>
            </div>

            <section>
                <label>
                    <input 
                        value={loginValues.username_or_email}
                        onChange={onChange}
                        name='username_or_email'
                        type='text'
                        placeholder='Username or Email'
                        size='35'
                    />
                </label><br/><br/>
                <label>
                    <input 
                        value={loginValues.password}
                        onChange={onChange}
                        name='password'
                        type='password'
                        placeholder='Password'
                        size='35'
                    />
                </label><br/><br/>
                <label>
                    <input 
                        value={loginValues.auth_code}
                        onChange={onChange}
                        name='auth_code'
                        type='text'
                        placeholder='Authorization Code (opt)'
                        size='35'
                    />
                </label><br/><br/>
            </section>

            <section className='loginCheckbox'>
                <label>
                    <input 
                        className='checkbox-square'
                        type='checkbox'
                        checked={loginValues.remember_me}
                        name='remember_me'
                        onChange={onChange}
                    />
                </label>
                <p className='login-checkbox-text'>Remember me</p>
                <p className='white-space'>ignore this space p</p>
                <Link className='login-text-link' to='/'>Forget password?</Link>
            </section>

            <section>
                <button className='login-button' disabled={loginDisabled} id='submit-button'>
                        SIGN IN
                </button>
                <div className='login-text'>
                    <p>Not Registered?</p>
                    <Link className='bottom-text-link' to='/'>Click here</Link>
                </div>
                <div>
                    <div>{loginErrors.username_or_email}</div>
                    <div>{loginErrors.password}</div>
                    <div>{loginErrors.auth_code}</div>
                </div>
            </section>
        </form>
    )
}