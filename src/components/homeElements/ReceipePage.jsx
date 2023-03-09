import React from "react";
// Это страничка с одним рецептом

export default function ReceipePage() {
  const recipe = {
    name: "Название рецепта",
    img: "https://realfood.tesco.com/media/images/RFO-LargeHero-1400x919-CarrotGingerSoup1-bb83a7a0-adc8-4e8f-b827-6f35a2423f12-0-1400x919.jpg",
    ingredients: "Огурец томат лук конфета",
    instruction: "/",
    time: "70min",
    ingredientsScale: "4",
  };
  // Рецепт передадим пропсами, при переходе к этой страничке
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto mx-md-5">
          <h1>{recipe.name}</h1>
          <img src={recipe.img} alt={recipe.name} style={{ width: "100%" }} />
          <h3>Список ингридиентов</h3>
          <div>{recipe.ingredients}</div>
          <div>{recipe.time}</div>
          <a href={recipe.instruction}>Перейти к инструкции</a>
        </div>
      </div>
    </div>
  );
}
