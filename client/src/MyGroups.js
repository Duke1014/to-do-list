import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function MyGroups() {

    const [groups, setGroups] = useState([])

    useEffect(() => {
        fetch("/me/groups")
        .then((r) => r.json())
        .then(setGroups)
    }, [])

    return (
        <div>
            {groups.length > 0 ? (
                <div className='group'>
                    {groups.map((group) => (
                        <div key={group.id}>
                            {group.group_name}
                        </div>
                    ))}
                </div>
            ) : <>
                You have no groups.
            </>}
            <br/><br/><br/><br/><br/>
            <button><Link to="/" className="back-button">Back</Link></button>
        </div>
    )
}