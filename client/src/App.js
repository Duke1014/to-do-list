import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home';
import MyTodos from './MyTodos';
import MyGroups from './MyGroups';
import GroupList from './GroupList';
import GroupCreator from './GroupCreator';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/my-todos" element={ <MyTodos /> } />
        <Route path="/my-groups" element={ <MyGroups /> } />
        <Route path="/group-list" element={ <GroupList /> } />
        <Route path="/group-creator" element={ <GroupCreator /> } />
      </Routes>
    </BrowserRouter>
  )
}