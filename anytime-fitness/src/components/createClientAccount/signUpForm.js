import React from 'react'
import { useHistory } from "react-router-dom";



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
            <div>
                
            </div>
        </form>
    )
}