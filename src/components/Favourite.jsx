import React from "react";
import OneRecipe from "./homeElements/OneRecipe";

export default function Favourite({ recipes }) {
  return (
    <div className="row">
      {recipes?.map((recipe) => (
        <OneRecipe key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
