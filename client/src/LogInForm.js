import React, { useContext, useState } from 'react'
import { UserContext } from './context/user'

export default function Login({ setError, setSignup }) {
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { login } = useContext(UserContext)

    const handleLogin = (e) => {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        }).then((r) => {
            if (r.ok) {
                setError(`Login successful!`)
                setSignup(false)
                r.json().then(data => {login(data)})
            } else {
                setError("Error: Username or password invalid")
            }
        })
    }

    return (
        <div className='login-form'>
            <form onSubmit={handleLogin}>
                <label>
                    Username: <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    /> <br/>
                    Password: <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </label>
                <br/>
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}