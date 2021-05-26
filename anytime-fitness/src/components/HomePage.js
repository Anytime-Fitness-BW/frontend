import React from "react";
import { useHistory, Link } from "react-router-dom";
import './Home.css'

function HomePage() {
    const history = useHistory();

    const routeToClientSignUp = () => {
        history.push('/register')
    }

    const routeToInstructorSignUp = () => {
        history.push('/register/instructor')
    }


    return (
        <div className='home'>
            <div class="container">
                <div class="nav">
                    <div class="logo">Tripp.</div>
                    <ul>
                        <li>Download App</li>
                        <li>Login</li>
                        <li>SignUp</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>

            <div class="hero">
                <div class="title">Argentina</div>

                <div class="button">
                    explore
                </div>
            </div>
            <div className='space'>
               <div>space</div>
               <div>space</div>
               <div>space</div>
               <div>space</div>
               <div>space</div>
               <div>space</div>
               <div>space</div>
               <div>space</div>
               <div>space</div>
               <div>space</div>
               <div>space</div>
               <div>space</div>
            </div>
        </div>
    )

}

export default HomePage;

{/* <div className='home'>
    <nav className='nav-container'>
        <h1></h1>
        <div className='nav-links'>
            <Link to='/login'>Sign in</Link>
        </div>
    </nav>
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
</div> */}