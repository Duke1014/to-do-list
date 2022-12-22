import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from './context/user'

export default function NavBar() {
const { user, loggedIn } = useContext(UserContext)
  return (
    <nav>
      <a><NavLink to="/" className="home-button">Let's To-do This!</NavLink></a>
      <a><NavLink to="/" className="test-button">TEST</NavLink></a>
    {loggedIn ? <>
        <a><NavLink to="/my-todos" className="my-todos">My Todos</NavLink></a>
        <a><NavLink to="/category-list" className='category-list'>Categories</NavLink></a>
        <a><NavLink to="/my-groups" className="my-groups" user={user}>My Groups</NavLink></a>
        <a><NavLink to="/group-list" className="group-list" user={user}>List of Groups</NavLink></a>
        <a><NavLink to="/group-creator" className='group-creator' user={user}>Make a Group</NavLink></a>
    </> : <></>}
    </nav>
  )
}
