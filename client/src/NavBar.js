import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from './context/user'

export default function NavBar() {
const { user, loggedIn } = useContext(UserContext)
  return (
    <nav>
      <span><NavLink to="/" className="home-button">Let's To-do This!</NavLink></span>
      <span><NavLink to="/" className="test-button">TEST</NavLink></span>
    {loggedIn ? <>
        <span><NavLink to="/my-todos" className="my-todos">My Todos</NavLink></span>
        <span><NavLink to="/category-list" className='category-list'>Categories</NavLink></span>
        <span><NavLink to="/my-groups" className="my-groups" user={user}>My Groups</NavLink></span>
        <span><NavLink to="/group-list" className="group-list" user={user}>List of Groups</NavLink></span>
        <span><NavLink to="/group-creator" className='group-creator' user={user}>Make a Group</NavLink></span>
    </> : <></>}
    </nav>
  )
}
