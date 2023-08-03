import React, {useState, useEffect} from 'react'

const UserContext = React.createContext()

function UserProvider({ children }) {
    const [user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)
    const [error, setError] = useState('')
    
    useEffect(() => {
        fetch("/me")
        .then(r => {
            if (r.ok) {
                r.json()
                .then(data => {
                    setUser(data)
                    setLoggedIn(true)
                })
            } else {
                showError('You have been signed out.', 3000)
            }
        })
    }, [])

    const login = (user) => {
        setUser(user)
        setLoggedIn(true)
        showError('You have logged in.', 3000)
    }
    const logout = () => {
        setUser({})
        setLoggedIn(false)
        showError('You have logged out.', 3000)
    }
    const signup = (user) => {
        setUser(user)
        setLoggedIn(true)
        showError('You have logged in.', 3000)
    }

    const showError = (message, timer = 5000) => {
        setError(message)
        setTimeout(() => {
            setError('')
        }, timer)
    }


    return (
        <UserContext.Provider value={{user, login, logout, signup, loggedIn, error, setError, showError}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }
