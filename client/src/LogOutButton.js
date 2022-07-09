import React, {useContext} from 'react'
import { UserContext } from './context/user'

export default function Logout({ setError }) {

    const { logout } = useContext(UserContext)

    const handleClick = () => {
        fetch("/logout", {
            method: "DELETE"
        }).then((r) => {
            if (r.ok) {
                logout()
            } else {
                return
            }
        })
    }

    return (
        <div>
            <button onClick={handleClick}>Log Out</button>
        </div>
    )
}
