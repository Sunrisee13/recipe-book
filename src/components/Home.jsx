import React, { useEffect } from "react";
import OneRecipe from "./homeElements/OneRecipe";

export default function Home() {
  // Создать переменную с массивом категорий и после буквы q запихать
  // Возможно логику запроса из юзеффекта надо вынести в функцию
  useEffect(() => {
    fetch(
      "https://api.edamam.com/api/recipes/v2?type=public&beta=false&q=soup&app_id=ea8b9ed4&app_key=%20dd76fee58274a583ce5ee3e916c01595%09&random=true"
    )
      .then((res) => res.json())
      .then(console.log);
  }, []);
  // Сделать массив объектов, с которым будет удобно работать,
  // Подогнать под него запрос
  const recipes = []; // это типо то, что мы получили с юзэффекта
  return <OneRecipe />;
}
