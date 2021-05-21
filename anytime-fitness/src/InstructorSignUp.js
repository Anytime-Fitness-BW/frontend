import react from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./InstructorSignUp.css"
import {Route, BrowserRouter as Router} from "react-router-dom"
function InstructorSignUp() {



    return (
        <div className= "xo">
            <h1> Create Account </h1>
            <form>
                <div className="personalInfo">
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Last Name"/>
                    <input type="text" placeholder="City"/>
                    <input type="text" placeholder="Zipcode"/>
                </div>
                <div className="accountInfo">
                    <input type="text" placeholder="Username"/>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Password"/>
                    <input type="text" placeholder="Authorization Code"/>
                </div>
            </form>
        </div>
    )
}

export default InstructorSignUp;