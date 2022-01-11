import React, { useEffect, useState } from 'react'

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
                            I AM A GROUP
                        </div>
                    ))}
                </div>
            ) : <>

            </>}
        </div>
    )
}
