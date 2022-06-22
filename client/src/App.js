import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home';
import MyTodos from './MyTodos';
import MyGroups from './MyGroups';
import GroupList from './GroupList';
import GroupCreator from './GroupCreator';
import GroupHome from './GroupHome';
import CategoryList from './CategoryList';
import NavBar from './NavBar';

import { UserProvider } from './context/user';

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/my-todos" element={ <MyTodos /> } />
          <Route path="/my-groups" element={ <MyGroups /> } />
          <Route path="/group-list" element={ <GroupList /> } />
          <Route path="/group-creator" element={ <GroupCreator /> } />
          <Route path="/group-home/:id" element={ <GroupHome /> } />
          <Route path="/category-list" element={ <CategoryList /> }/>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}