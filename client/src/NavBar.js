import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from './context/user'

export default function NavBar() {
const { user } = useContext(UserContext)
  return (
   <nav>
    <NavLink to="/my-todos" className="my-todos">My Todos</NavLink>
    <NavLink to="/category-list" className='category-list'>Categories</NavLink>
    <NavLink to="/my-groups" className="my-groups" user={user}>My Groups</NavLink>
    <NavLink to="/group-list" className="group-list" user={user}>List of Groups</NavLink>
    <NavLink to="/group-creator" className='group-creator' user={user}>Make a Group</NavLink>
   </nav>
  )
}
