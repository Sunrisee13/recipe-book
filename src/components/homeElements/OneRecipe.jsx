import React, { useState } from "react";
import axios from "axios";

export default function OneRecipe({ recipe, setOneRecipePage, user }) {
  const [favIcon, setFavIcon] = useState(true);
  const favHandler = async (e) => {
    e.stopPropagation();
    setFavIcon((prev) => !prev);
    await axios.put('/favourite', recipe);
  };
  return (
    <div
      onClick={() => {
        console.log(recipe);
        setOneRecipePage(recipe);
      }}
      className='card one-recipe d-flex justify-content-around m-2'
      style={{ width: '18rem' }}
    >
      <img src={recipe.img} className='card-img-top' alt='' />
      <div className='card-body'>
        <h5 className='card-title'>{recipe.name}</h5>
      </div>
      <ul className='list-group list-group-flush' id="all-cards-allign">
        <li className='list-group-item' id="ingr">
          Ingredients: 
          {recipe.ingredients}
        </li>
        <li className='list-group-item ' id="cooking">
          Cooking time:
          {recipe.time}
        </li>
      </ul>
      <div>
        {user && favIcon && (
          <div className='heart'>
            <img onClick={favHandler} src='img/heart.png' alt='' />
          </div>
        )}
      </div>
    </div>
  );
}
