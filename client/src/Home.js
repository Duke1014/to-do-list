import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import SignUpForm from './SignUpForm'

export default function Home() {

    const [user, setUser] = useState()
    const [login, setLogin] = useState()
    const [signup, setSignup] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        fetch("/me").then((r) => {
            if (r.ok) {
                r.json().then(setUser(true));
            }
        })
    }, []);

    const showLogin = () => {
        setSignup(false)
        setLogin(false)
    }

    return (
        <div>
            <h1 className='front-page'>Let's To-Do This!</h1>
            <h3>Welcome! Log in here!</h3>

            <h3>{error}</h3>

        {user ? <>
            <div>
                {/* <h3><Link to="/soundboard" className="soundboard" user={user}>Soundboard</Link></h3>
                <h3><Link to="/soundboard-creation" className="soundboard-creation">Make A Sound</Link></h3>
                <h3><Link to="/user-soundboard" className="user-soundboard">User Soundboard</Link></h3> */}
            </div>
            <br/>
            {/* <Logout setUser={setUser} setError={setError}/> */}
        </> : <>
            {signup ? <>
                <SignUpForm setUser={setUser} setError={setError} setSignup={setSignup} setLogin={setLogin} />
            </> : <> 
                {/* <Login setUser={setUser} setError={setError} setSignup={setSignup} setLogin={setLogin}/> */}
            </>}
        </>}

    </div>
    )
}
