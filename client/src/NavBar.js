import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from './context/user'
import Logout from './LogOutButton'

export default function NavBar() {
const { user, loggedIn } = useContext(UserContext)
  return (
    <nav>
    {loggedIn ? <>
        <a><NavLink to="/my-todos" className="my-todos">My Todos</NavLink></a>
        <a><NavLink to="/category-list" className='category-list'>Categories</NavLink></a>
        <a><NavLink to="/my-groups" className="my-groups" user={user}>My Groups</NavLink></a>
        <a><NavLink to="/group-list" className="group-list" user={user}>List of Groups</NavLink></a>
        <a><NavLink to="/group-creator" className='group-creator' user={user}>Make a Group</NavLink></a>
        <a><Logout /></a>
    </> : <>Please sign in to use the navigation menu</>}
    </nav> 
  )
}
