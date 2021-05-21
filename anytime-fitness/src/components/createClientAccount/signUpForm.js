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
                <section className='text-inputs'>
                    <label> 
                        <input 
                            value={values.first_name} 
                            onChange={onChange} 
                            name="first_name" 
                            type="text" 
                            placeholder="First Name"
                        />  
                    </label><br/> <br/>
                </section>
            </div>
        </form>
    )
}