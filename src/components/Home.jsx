import React, { useEffect, useState } from "react";
import OneRecipe from "./homeElements/OneRecipe";

export default function Home() {
  const [recipes1, setRecipes] = useState([]);
  // Создать переменную с массивом категор(ий и после буквы q запихать
  // Возможно логику запроса из юзеффекта надо вынести в функцию
  const category = () => {
    const hardCodeCategoryFood = ['soup', 'salad', 'burger', 'paste', 'meat', 'drink', 'cake', 'bread', 'cereals', 'desserts', 'preserve', 'preps', 'sandwiches', 'starter'];
    const random = Math.floor(Math.random() * hardCodeCategoryFood.length);
    return hardCodeCategoryFood[random];
  };

  useEffect(() => {
    fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&beta=false&q=${category()}&app_id=ea8b9ed4&app_key=%20dd76fee58274a583ce5ee3e916c01595%09&random=true`,
    )
      .then((res) => res.json())

      .then((res) => {
        setRecipes(
          res.hits.map((el) => ({
            name: el.recipe.label,
            img: el.recipe.image,
            ingredients: el.recipe.ingredients
              .map((ell) => ell.food)
              .toString(),
            instruction: el.recipe.url,
            time: Math.floor(Math.random() * 12 + 6) * 5,
            ingredientsScale: el.recipe.ingredients.map((elll) => elll.food)
              .length,
          }))
        );
      });
  }, []);

  return (
    <div className="row">
      {recipes1?.map((recipe) => (
        <OneRecipe key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
