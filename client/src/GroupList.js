import React, { useEffect, useState } from 'react'

export default function GroupList() {

    const [groups, setGroups] = useState([])

    useEffect(() => {
        fetch("/groups")
        .then((r) => r.json())
        .then(setGroups)
    }, [])

    return (
        <div>
         {groups.map((group) => (
            <div key={group.id}>
                {group.name}
            </div>
         ))}   
        </div>
    )
}
