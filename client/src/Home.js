import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

import SignUpForm from './SignUpForm'
import LogInForm from './LogInForm'
import LogOutButton from './LogOutButton'
import { Link } from 'react-router-dom'

export default function Home() {

    const [user, setUser] = useState()
    const [signup, setSignup] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        fetch("/me").then((r) => {
            if (r.ok) {
                r.json().then(setUser(true));
            }
        })
    }, []);

    const showSignUp = () => {
        setSignup(true)
    }
    const hideSignUp = () => {
        setSignup(false)
    }

    return (
        <div>
            <h1 className='front-page'>Let's To-Do This!</h1>
            
            <h3>{error}</h3>

        {user ? <>
            <div>
                <h3><Link to="/my-todos" className="my-todos" user={user}>My Todos</Link></h3>
            </div>
            <br/>
            <LogOutButton setUser={setUser} setError={setError}/>
        </> : <>
            {signup ? <>
                <h3>Welcome! Sign up here!</h3>
                <SignUpForm setUser={setUser} setError={setError} setSignup={setSignup} />
                <h3>Already signed up? Log in here:</h3>
                <button onClick={hideSignUp}>Log In!</button>
            </> : <> 
                <h3>Welcome! Log in here!</h3>
                <LogInForm setUser={setUser} setError={setError} setSignup={setSignup} />
                <h3>Not signed up yet? Click here!</h3>
                <button onClick={showSignUp}>Sign up!</button>
            </>}
        </>}

    </div>
    )
}
