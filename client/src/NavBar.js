import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from './context/user'

export default function NavBar() {
const { user, loggedIn } = useContext(UserContext)
  return (
    <nav>
      <span><NavLink to="/" className="home-button">Let's To-do This!</NavLink></span>
    {loggedIn ? <>
        <span><NavLink to="/my-todos" className="my-todos-button">My Todos</NavLink></span>
        <span><NavLink to="/category-list" className='categories-button'>Categories</NavLink></span>
        <span><NavLink to="/my-groups" className="my-groups-button" user={user}>My Groups</NavLink></span>
        <span><NavLink to="/group-list" className="group-list-button" user={user}>List of Groups</NavLink></span>
        <span><NavLink to="/group-creator" className='group-creator-button' user={user}>Make a Group</NavLink></span>
    </> : <></>}
    </nav>
  )
}
