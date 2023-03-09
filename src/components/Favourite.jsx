import React, { useState } from 'react';
import OneRecipeFavorite from './favoriteElements/OneRecipeFavorite';

export default function Favourite({ user, allRecipes }) {
  const [recipes, setRecipes] = useState(allRecipes || []);
  return (
    <div className="row">
      {recipes?.map((recipe) => (
        <OneRecipeFavorite recipe={recipe} user={user} setRecipes={setRecipes} />
      ))}
    </div>
  );
}
