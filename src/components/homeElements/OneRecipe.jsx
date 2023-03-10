import React, { useState } from "react";
import axios from "axios";
import ReceipePage from "./ReceipePage"; // А зачем оно тут?

// Это компонент, который оображается в Home page

export default function OneRecipe({ recipe, setOneRecipePage, user }) {
  const [favIcon, setFavIcon] = useState(true);
  const favHandler = async (e) => {
    e.stopPropagation();
    setFavIcon((prev) => !prev);
    await axios.put("/favourite", recipe);
  };
  return (
    <div
      onClick={() => {
        console.log(recipe);
        setOneRecipePage(recipe);
      }}
      className="card one-recipe"
      style={{ width: "18rem" }}
    >
      <img src={recipe.img} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{recipe.name}</h5>
      </div>
      <ul className="list-group list-group-flush ">
        <li className="list-group-item">Ingredients: {recipe.ingredients}</li>
        <li className="list-group-item">Cooking time: {recipe.time}</li>
      </ul>
      <div>
        {user && favIcon && (
          <div className="heart">
            <img onClick={favHandler} src="img/heart.png" alt="" />
          </div>
        )}
      </div>
      <hr />
    </div>
  );
}
