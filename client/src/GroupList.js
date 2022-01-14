import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function GroupList() {

    const [groups, setGroups] = useState([])

    useEffect(() => {
        fetch("/groups")
        .then((r) => r.json())
        .then(setGroups)
    }, [])

    return (
        <div className='group'>
            {groups.map((group) => (
                <div key={group.id}>
                    <Link to="/group-home">{group.group_name}</Link>
                </div>
            ))}
        </div>  
    )
}
