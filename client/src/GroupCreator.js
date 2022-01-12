import React, { useState } from 'react'

export default function GroupCreator() {

    const [groupName, setGroupName] = useState("")
    const [groupError, setGroupError] = useState("")

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
            } else {
                setGroupError("Error!")
                console.log(r)
            }
        })
    }

    return (
        <div>
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
        </div>
    )
}
