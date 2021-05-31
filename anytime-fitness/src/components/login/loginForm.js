import React, { useState } from 'react'
import { useHistory, Link } from "react-router-dom";
import axiosWithAuth from '../../utils/axiosWithAuth';

const initialState = [{
    username:"", 
    password: "", 
    auth: ""
}]

export default function LoginForm(props) {
    const {
        loginValues,
        loginChange,
        loginSubmit,
        loginDisabled,
        loginErrors,
    } = props
  const [register, setRegister] = useState(initialState)
    
  const history = useHistory();

    const onSubmit = event => {
        event.preventDefault()
        axiosWithAuth()
            .post('/api/auth/login', {username: loginValues.username_or_email, password: loginValues.password, Auth: loginValues.auth_code })
            .then(res=>{
                console.log("login post RES", res)
                localStorage.setItem("token", res.data.token)
                if (loginValues.auth_code === '') {
                    return history.push('/dashboard')
                } else {
                    return history.push('/dashboard/instructor')
                }
            })
            .catch(err=>{
                console.log({err})
            })

        
     }

    const onChange = (event) => {
        const { name, value, checked, type } = event.target;
        const inputValue = type === "checkbox" ? checked : value;
        loginChange(name, inputValue);
    }


    return (
        <form className='backgroundColor' onSubmit={onSubmit}>
            <nav>
                <h1></h1>
                <div className='nav-links'>
                    <Link to='/' style={{ textDecoration: 'underline' }}>Home</Link>
                </div>
            </nav>

            <section className='form'>
                <div>
                    <img
                        className='login-image'
                        src='https://pic.onlinewebfonts.com/svg/img_401900.png'
                        alt='user.img'
                    />
                    <hr className='hr' />
                    <h4> Sign In </h4>
                    <hr className='hr2' />
                </div>
                <div className='login-text'>
                    <p>Not Registered?</p>
                    <Link className='bottom-text-link' to='/'>Click here</Link>
                </div>
                <label>
                    <input className='usernameInput'
                        value={loginValues.username_or_email}
                        onChange={onChange}
                        name='username_or_email'
                        type='text'
                        placeholder='Username or Email'
                        size='35'
                    />
                </label>
                <label>
                    <input className='passwordInput'
                        value={loginValues.password}
                        onChange={onChange}
                        name='password'
                        type='password'
                        placeholder='Password'
                        size='35'
                    />
                </label>
                <label>
                    <input className='authCodeInput'
                        value={loginValues.auth_code}
                        onChange={onChange}
                        name='auth_code'
                        type='text'
                        placeholder='Authorization Code (opt)'
                        size='35'
                    />
                </label>
                <div>
                    <button className='login-button' disabled={loginDisabled} id='submit-button'>
                        SIGN IN
                    </button>
                </div>

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
                    <p className='white-space'></p>

                    <Link className='login-text-link' to='/'>Forget password?</Link>
                </section>
            </section>

            <section>
                <div >
                    <div>{loginErrors.username_or_email}</div>
                    <div>{loginErrors.password}</div>
                    <div>{loginErrors.auth_code}</div>
                </div>
            </section>
            <div className='space'>
                <div>space</div>
                <div>space</div>
                <div>space</div>
            </div>
        </form>
    )
}