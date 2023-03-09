import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from './auth/Auth';
import Register from './auth/Register';
import Favourite from './Favourite';
import Home from './Home';
import Navbar from './Navbar';
import ReceipePage from './homeElements/ReceipePage'; // удалить + роутер

function App({ user }) {
  console.log(user);
  return (
    <>
      <Navbar user={user} />
      <Routes>
        <Route path='/' element={<Home user={user} />} />
        <Route path='/favourite' element={<Favourite />} />
        <Route path='/auth/reg' element={<Register />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
