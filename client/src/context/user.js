import React, {useState, useEffect} from 'react'

const UserContext = React.createContext()

function UserProvider({ children }) {
    const [user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)
    
    useEffect(() => {
        fetch("/me")
        .then(r => {
            if (r.ok) {
                r.json()
                .then(data => {
                    setUser(data)
                    setLoggedIn(true)
                })
            }
        })
    }, [])

    const login = (user) => {
        setUser(user)
        setLoggedIn(true)
    }
    const logout = () => {
        setUser({})
        setLoggedIn(false)
    }
    const signup = (user) => {
        setUser(user)
        setLoggedIn(true)
    }


    return (
        <UserContext.Provider value={{user, login, logout, signup, loggedIn}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }
