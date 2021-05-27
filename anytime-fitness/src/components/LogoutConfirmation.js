
function LogoutConfirmation (){

    const signOutMessage = () => {
        
    }

    return(
        <div>
            <h2> Are you sure you want to log out?</h2>
            <button oncClick={signOutMessage}>Yes</button>
            <button onClick={routeToHomePage}>Go Back</button>

        </div>
    )
}

export default LogoutConfirmation;