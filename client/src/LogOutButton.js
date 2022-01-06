import React from 'react'

export default function Logout({ setUser, setError }) {

    const logout = () => {
        fetch("/logout", {
            method: "DELETE"
        }).then((r) => {
            if (r.ok) {
                setUser(false)
                setError("Logout successful")
            } else {
                setError("Error: User Not Found")
            }
        })
    }

    return (
        <div>
            <button onClick={logout}>Log Out</button>
        </div>
    )
}
