import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './context/user'

export default function MyGroups() {

    const [groups, setGroups] = useState([])
    const { loggedIn } = useContext(UserContext)

    useEffect(() => {
        fetch("/me/groups")
        .then((r) => r.json())
        .then(setGroups)
    }, [])

    return (
        <div className='my-groups'>
            {loggedIn ? <>
                {groups.length > 0 ? (
                    <div className='group'>
                        {groups.map((group) => (
                            <div key={group.id}>
                                <Link 
                                    to={`/group-home/${group.id}`}
                                    id={group.id}
                                    name={group.group_name}
                                >{group.group_name}</Link>
                            </div>
                        ))}
                    </div>
                ) : <>
                    You have no groups.
                </>}
            </> : <>
                <h2>Unauthorized access. Please log in to continue.</h2>
            </>}
        </div>
    )
}