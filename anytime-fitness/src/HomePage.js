import React from "react";
import { useHistory, Link } from "react-router-dom";

function HomePage() {
    const history = useHistory();

    const routeToClientSignUp = () => {
        history.push('/register')
    }

    const routeToInstructorSignUp = () => {
        history.push('/register/instructor')
    }


    return (
        <div>
            <h1>Anytime Fitness</h1>
            <div className='home-wrapper'>
                <img
                    className='home-image'
                    src='https://i.stack.imgur.com/y9DpT.jpg'
                    alt='place-holder.img'
                />
            </div>
            <div className='buttons-and-link'>
                <button className='clientButton' onClick={routeToClientSignUp}>
                    Create Client Account
                </button>
                <button className='instructorButton' onClick={routeToInstructorSignUp}>
                    Create Instructor Account
                </button>
                <Link to='/login'>or click here to sign in</Link>
            </div>
        </div>
    )

}

export default HomePage;