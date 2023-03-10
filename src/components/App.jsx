import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./auth/Auth";
import Register from "./auth/Register";
import Favourite from "./Favourite";
import Home from "./Home";
import Navbar from "./Navbar";
import ReceipePage from "./homeElements/ReceipePage";

function App({ user, recipes }) {
  return (
    <>
      <Navbar user={user} />
      <Routes>
        <Route
          path="/favourite"
          element={<Favourite user={user} allRecipes={recipes} />}
        />
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home user={user} />} />
        <Route path="/auth/reg" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
