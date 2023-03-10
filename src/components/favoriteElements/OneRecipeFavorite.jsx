import axios from "axios";
import React, { useState } from "react";

export default function OneRecipeFavorite({ user, recipe, setRecipes }) {
  const [change, setChange] = useState(false);
  const [recipeState, setRcipeState] = useState({
    name: recipe.name,
    ingredients: recipe.ingredients,
    time: recipe.time,
  });

  const changeHandler = (event) => {
    setRcipeState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const editHandler = (id) => {
    setChange(!change);
    if (change) {
      axios
        .patch('/favourite', {
          name: recipeState.name,
          ingredients: recipeState.ingredients,
          time: recipeState.time,
        })
        .then(({ data }) =>
          setRecipes((prev) =>
            prev.map((el) => {
              if (el.id === data.id) {
                return data;
              }
              return el;
            })
          )
        );
    }
  };
  const deleteHandler = () => {
    axios
      .delete(`/favourite/${recipe.id}`)
      .then(() =>
        setRecipes((prev) => prev.filter((recipe1) => recipe1.id !== recipe.id))
      )
      .catch(console.log);
  };

  return (
    <div className="card one-recipeFav" style={{ width: "18rem" }}>
      <img src={recipe.img} className="card-img-top" alt="" />
      <div className="card-body">
        {!change ? (
          <h5 className="card-title">{recipe?.name}</h5>
        ) : (
          <input
            name="name"
            onChange={changeHandler}
            type="text"
            className="form-control"
            value={recipeState.name}
          />
        )}
      </div>
      <ul className="list-group list-group-flush ">
        {!change ? (
          <li className="list-group-item">
            Ingredients: {recipe?.ingredients}
          </li>
        ) : (
          <input
            name='ingredients'
            onChange={changeHandler}
            type='text'
            className='form-control'
            value={recipeState.ingredients}
          />
        )}
        {!change ? (
          <li className='list-group-item'>Cooking time: {recipe?.time}</li>
        ) : (
          <input
            name='time'
            onChange={changeHandler}
            type='text'
            className='form-control'
            value={recipeState.time}
          />
        )}
        <li className="list-group-item">
          <a href={recipe.instruction}>Рецепт</a>
        </li>
      </ul>

      {!change ? (
        <button
          type='button'
          onClick={() => setChange((prev) => !prev)}
          className='btn btn-primary m-2'
        >
          Change
        </button>
      ) : (
        <button
          type='button'
          className='btn btn-warning m-2'
          onClick={editHandler}
        >
          Save
        </button>
      )}
      <button
        type='button'
        className='btn btn-danger m-2'
        onClick={deleteHandler}
      >
        Delete
      </button>
    </div>
  );
}
