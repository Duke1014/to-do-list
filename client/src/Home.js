import React, { useState, useContext } from 'react'

import SignUpForm from './SignUpForm'
import LogInForm from './LogInForm'
import LogOutButton from './LogOutButton'
import { UserContext } from './context/user'

export default function Home() {

    const { user, loggedIn } = useContext(UserContext)
    const [signup, setSignup] = useState()
    const [error, setError] = useState()

    const showSignUp = () => {
        setSignup(true)
    }
    const hideSignUp = () => {
        setSignup(false)
    }

    return (
        <div>
            {/* <h1>Let's To-Do This!</h1> */}
            <h3 className='error'>{error}</h3>
            {loggedIn ? <>
                <div>
                    <h2 className='welcome'>Welcome, {user.username}!</h2>
                </div>
                <br/>
                <LogOutButton className="log-out-button" setError={setError}/>
            </> : <>
                {signup ? <>
                    <h3>Welcome! Sign up here!</h3>
                    <SignUpForm className="sign-up-form" setError={setError} setSignup={setSignup} />
                    <h3>Already signed up? Log in here:</h3>
                    <button onClick={hideSignUp}>Log In!</button>
                </> : <> 
                    <h3>Welcome! Log in here!</h3>
                    <LogInForm className="log-in-form" setError={setError} setSignup={setSignup} />
                    <h3>Not signed up yet? Click here!</h3>
                    <button onClick={showSignUp}>Sign up!</button>
                </>}
            </>}
        </div>
    )
}
