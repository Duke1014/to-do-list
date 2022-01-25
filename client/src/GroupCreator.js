import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './context/user'

export default function GroupCreator() {

    const [groupName, setGroupName] = useState("")
    const [groupError, setGroupError] = useState("")
    const { loggedIn } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setGroupError("")
        fetch("/groups", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({group_name: groupName})
        }).then((r) => {
            if (r.ok) {
                setGroupError("Group saved successfully!")
                console.log(r)
            } else {
                setGroupError("Error!")
                console.log(r)
            }
        })
    }

    return (
        <div>
            {loggedIn ? <>
                <form onSubmit={handleSubmit}>
                    <label>
                        Group Name: <input 
                            type="text"
                            name='name'
                            value={groupName}
                            onChange={e => setGroupName(e.target.value)}
                        />
                    </label>
                    <button type='submit'>Create Group</button>
                </form>
                <br/>
            {groupError}
            </> : <>
                <h2>Unauthorized access. Please log in to continue.</h2>
            </>}
            <br/><br/><br/><br/><br/>
            <button><Link to="/" className="back-button">Back</Link></button>
        </div>
    )
}
