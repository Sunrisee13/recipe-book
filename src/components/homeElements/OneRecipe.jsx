import React, { useState } from "react";
import axios from "axios";

// Это компонент, который оображается в Home page

export default function OneRecipe({ recipe }) {
  // const [favourite, setFavourite] = useState("");
  const favHandler = async () => {
    await axios.put(`/favourite`, recipe);
    // setFavourite((prev) => prev.filter((el) => el.id !== id));
  };
  return (
    <div className="card one-recipe" style={{ width: "18rem" }}>
      <a href="#">
        <img src={recipe.img} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{recipe.name}</h5>
        </div>
        <ul className="list-group list-group-flush ">
          <li className="list-group-item">Ingredients: {recipe.ingredients}</li>
          <li className="list-group-item">Cooking time: {recipe.time}</li>
        </ul>
        <div className="heart">
          <img onClick={favHandler} src="img/heart.png" alt="" />
        </div>
      </a>
      <hr />
    </div>
  );
}
