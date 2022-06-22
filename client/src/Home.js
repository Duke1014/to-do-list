import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

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
            <h1 className='front-page'>Let's To-Do This!</h1>
            <h3>{error}</h3>
            {loggedIn ? <>
                <div>
                    <h2 className='welcome'>Welcome, {user.username}!</h2>
                    <ul className='menu'>
                        <li><Link to="/my-todos" className="my-todos">My Todos</Link></li>
                        <li><Link to="/category-list" className='category-list'>Categories</Link></li>
                        <li><Link to="/my-groups" className="my-groups" user={user}>My Groups</Link></li>
                        <li><Link to="/group-list" className="group-list" user={user}>List of Groups</Link></li>
                        <li><Link to="/group-creator" className='group-creator' user={user}>Make a Group</Link></li>
                    </ul>                
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
