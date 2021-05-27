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
                    <div class="logo">HEALTH</div>
                    <ul>
                        <li>Download App</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li><Link to='/login' style={{ color: 'black', textDecoration: 'none' }}>Sign in</Link></li>
                    </ul>
                </div>
            </div>

            <div class="hero">
                <div class="title">Anywhere Fitness</div>

                <div className='home-buttons'>
                    <div className='home-button1' onClick={routeToClientSignUp}>
                        Create Client Account
                    </div>
                    <div className='home-button2' onClick={routeToInstructorSignUp}>
                        Create Instructor Account
                    </div>
                </div>
            </div>
            <div className='home-link'>
                <Link to='/login' style={{ color: 'black', textDecoration: 'none' }}>or click here to sign in</Link>
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
                <div>space</div>
            </div>
        </div>
    )

}

export default HomePage;