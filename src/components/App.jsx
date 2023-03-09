import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from './auth/Auth';
import Register from './auth/Register';
import Favourite from './Favourite';
import Home from './Home';
import Navbar from './Navbar';
import ReceipePage from './homeElements/ReceipePage'; // удалить + роутер

function App({ user, recipes }) {
  console.log(user);
  return (
    <>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourite" element={<Favourite user={user} allRecipes={recipes} />} />
        <Route path="/auth/reg" element={<Register />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/test" element={<ReceipePage />} />
      </Routes>
    </>
  );
}

export default App;
