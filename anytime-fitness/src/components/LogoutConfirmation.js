import react from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Logout.css'

function LogoutConfirmation (){

    const history = useHistory();
    const routeToLogin = () => {
        history.push('/login')
    }
    

    return(
        <div className='logOut'> 
            <section className='headerContainer'>
                <div class="healthLogo">
                    HEALTH
                </div>
                <div class='signInButton1'>
                    <button className = 'logInButton' onClick={routeToLogin}>Sign In</button>
                </div>
            </section>
            

            <div className='container'>
                <body className='confirmation'>
                    <h1 className=' logOutMessage'>You have been <br></br>logged out</h1>
                    <p className='logOutMessage2'> Thank you for using Anytime Fitness</p>
                    <Link to='/login' style={{ color: 'black', textDecoration: 'none' }}> Please click here to login back to our page </Link>
                    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@300;600&display=swap" rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Mate+SC&display=swap" rel="stylesheet"></link>
                </body>
                <div className='image'></div>
            </div>
            
            <section class='navigation'>
                <ul>
                    <Link to='/' style={{ color: 'black', textDecoration: 'none' }}>Home</Link>
                    <li>Download App</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </section>
        </div>
    )
}

export default LogoutConfirmation;