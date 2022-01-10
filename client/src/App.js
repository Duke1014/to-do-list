import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home';
import MyTodos from './MyTodos';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/my-todos" element={ <MyTodos /> } />
      </Routes>
    </BrowserRouter>
  )
}