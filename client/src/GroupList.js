import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from './context/user'

export default function GroupList() {

    const [groups, setGroups] = useState([])
    const [error, setError] = useState("")
    const { loggedIn } = useContext(UserContext)

    useEffect(() => {
        fetch("/groups")
        .then((r) => r.json())
        .then(setGroups)
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        setError("")
        fetch(`/groups/${e.target.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ group_id: e.target.id })
        }).then((r) => {
            if (r.ok) {
                setError(`You have joined the group! Welcome to ${e.target.name}!`)
            } else {
                setError("You are already in this group, or the group does not exist.")
            }
        })
    }

    return (
        <div className='group'>
            {loggedIn ? <>
                {groups.map((group) => (
                    <div className="list-item" key={group.id}>
                        {group.group_name} - <button id={group.id} name={group.group_name} onClick={handleClick}>Join Group</button>
                    </div>
                ))}
                <br/>
                {error}
            </> : <>
                <h2>Unauthorized access. Please log in to continue.</h2>
            </>}
        </div>  
    )
}
