import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Favourite from './Favourite';
import Home from './Home';
import Navbar from './Navbar';

function App({}) {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route index path='/favourite' element={<Favourite />} />
      </Routes>
    </>
  );
}

export default App;
