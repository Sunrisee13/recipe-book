import React, { useEffect } from 'react';
import OneRecipe from './homeElements/OneRecipe';

export default function Home() {
  // Создать переменную с массивом категорий и после буквы q запихать
  // Возможно логику запроса из юзеффекта надо вынести в функцию
  useEffect(() => {
    fetch(
      'https://api.edamam.com/api/recipes/v2?type=public&beta=false&q=soup&app_id=ea8b9ed4&app_key=%20dd76fee58274a583ce5ee3e916c01595%09&random=true'
    )
      .then((res) => res.json())
      .then(console.log);
  }, []);
  // Сделать массив объектов, с которым будет удобно работать,
  // Подогнать под него запрос

  // const recipe = {
  //   name: "Название рецепта",
  //   img: "https://realfood.tesco.com/media/images/RFO-LargeHero-1400x919-CarrotGingerSoup1-bb83a7a0-adc8-4e8f-b827-6f35a2423f12-0-1400x919.jpg",
  //   ingredients: "Огурец томат лук конфета",
  //   instruction: "Ссылка на инструкцию",
  //   time: "70min",
  //   ingredientsScale: "4",
  // };

  const recipes = [
    {
      name: 'Название рецепта',
      img: 'https://realfood.tesco.com/media/images/RFO-LargeHero-1400x919-CarrotGingerSoup1-bb83a7a0-adc8-4e8f-b827-6f35a2423f12-0-1400x919.jpg',
      ingredients: 'Огурец томат лук конфета',
      instruction: 'Ссылка на инструкцию',
      time: '70min',
      ingredientsScale: '4',
    },
    {
      name: 'Название рецепта',
      img: 'https://realfood.tesco.com/media/images/RFO-LargeHero-1400x919-CarrotGingerSoup1-bb83a7a0-adc8-4e8f-b827-6f35a2423f12-0-1400x919.jpg',
      ingredients: 'Огурец томат лук конфета',
      instruction: 'Ссылка на инструкцию',
      time: '70min',
      ingredientsScale: '4',
    },
    {
      name: 'Название рецепта',
      img: 'https://realfood.tesco.com/media/images/RFO-LargeHero-1400x919-CarrotGingerSoup1-bb83a7a0-adc8-4e8f-b827-6f35a2423f12-0-1400x919.jpg',
      ingredients: 'Огурец томат лук конфета',
      instruction: 'Ссылка на инструкцию',
      time: '70min',
      ingredientsScale: '4',
    },
    {
      name: 'Название рецепта',
      img: 'https://realfood.tesco.com/media/images/RFO-LargeHero-1400x919-CarrotGingerSoup1-bb83a7a0-adc8-4e8f-b827-6f35a2423f12-0-1400x919.jpg',
      ingredients: 'Огурец томат лук конфета',
      instruction: 'Ссылка на инструкцию',
      time: '70min',
      ingredientsScale: '4',
    },
    {
      name: 'Название рецепта',
      img: 'https://realfood.tesco.com/media/images/RFO-LargeHero-1400x919-CarrotGingerSoup1-bb83a7a0-adc8-4e8f-b827-6f35a2423f12-0-1400x919.jpg',
      ingredients: 'Огурец томат лук конфета',
      instruction: 'Ссылка на инструкцию',
      time: '70min',
      ingredientsScale: '4',
    },
    {
      name: 'Название рецепта',
      img: 'https://realfood.tesco.com/media/images/RFO-LargeHero-1400x919-CarrotGingerSoup1-bb83a7a0-adc8-4e8f-b827-6f35a2423f12-0-1400x919.jpg',
      ingredients: 'Огурец томат лук конфета',
      instruction: 'Ссылка на инструкцию',
      time: '70min',
      ingredientsScale: '4',
    },
    {
      name: 'Название рецепта',
      img: 'https://realfood.tesco.com/media/images/RFO-LargeHero-1400x919-CarrotGingerSoup1-bb83a7a0-adc8-4e8f-b827-6f35a2423f12-0-1400x919.jpg',
      ingredients: 'Огурец томат лук конфета',
      instruction: 'Ссылка на инструкцию',
      time: '70min',
      ingredientsScale: '4',
    },
    {
      name: 'Название рецепта',
      img: 'https://realfood.tesco.com/media/images/RFO-LargeHero-1400x919-CarrotGingerSoup1-bb83a7a0-adc8-4e8f-b827-6f35a2423f12-0-1400x919.jpg',
      ingredients: 'Огурец томат лук конфета',
      instruction: 'Ссылка на инструкцию',
      time: '70min',
      ingredientsScale: '4',
    },
    {
      name: 'Название рецепта',
      img: 'https://realfood.tesco.com/media/images/RFO-LargeHero-1400x919-CarrotGingerSoup1-bb83a7a0-adc8-4e8f-b827-6f35a2423f12-0-1400x919.jpg',
      ingredients: 'Огурец томат лук конфета',
      instruction: 'Ссылка на инструкцию',
      time: '70min',
      ingredientsScale: '4',
    },
    {
      name: 'Название рецепта',
      img: 'https://realfood.tesco.com/media/images/RFO-LargeHero-1400x919-CarrotGingerSoup1-bb83a7a0-adc8-4e8f-b827-6f35a2423f12-0-1400x919.jpg',
      ingredients: 'Огурец томат лук конфета',
      instruction: 'Ссылка на инструкцию',
      time: '70min',
      ingredientsScale: '4',
    },
    {
      name: 'Название рецепта',
      img: 'https://realfood.tesco.com/media/images/RFO-LargeHero-1400x919-CarrotGingerSoup1-bb83a7a0-adc8-4e8f-b827-6f35a2423f12-0-1400x919.jpg',
      ingredients: 'Огурец томат лук конфета',
      instruction: 'Ссылка на инструкцию',
      time: '70min',
      ingredientsScale: '4',
    },
    {
      name: 'Название рецепта',
      img: 'https://realfood.tesco.com/media/images/RFO-LargeHero-1400x919-CarrotGingerSoup1-bb83a7a0-adc8-4e8f-b827-6f35a2423f12-0-1400x919.jpg',
      ingredients: 'Огурец томат лук конфета',
      instruction: 'Ссылка на инструкцию',
      time: '70min',
      ingredientsScale: '4',
    },
    {
      name: 'Название рецепта',
      img: 'https://realfood.tesco.com/media/images/RFO-LargeHero-1400x919-CarrotGingerSoup1-bb83a7a0-adc8-4e8f-b827-6f35a2423f12-0-1400x919.jpg',
      ingredients: 'Огурец томат лук конфета',
      instruction: 'Ссылка на инструкцию',
      time: '70min',
      ingredientsScale: '4',
    },
    {
      name: 'Название рецепта',
      img: 'https://realfood.tesco.com/media/images/RFO-LargeHero-1400x919-CarrotGingerSoup1-bb83a7a0-adc8-4e8f-b827-6f35a2423f12-0-1400x919.jpg',
      ingredients: 'Огурец томат лук конфета',
      instruction: 'Ссылка на инструкцию',
      time: '70min',
      ingredientsScale: '4',
    },
    {
      name: 'Название рецепта',
      img: 'https://realfood.tesco.com/media/images/RFO-LargeHero-1400x919-CarrotGingerSoup1-bb83a7a0-adc8-4e8f-b827-6f35a2423f12-0-1400x919.jpg',
      ingredients: 'Огурец томат лук конфета',
      instruction: 'Ссылка на инструкцию',
      time: '70min',
      ingredientsScale: '4',
    },
    {
      name: 'Название рецепта',
      img: 'https://realfood.tesco.com/media/images/RFO-LargeHero-1400x919-CarrotGingerSoup1-bb83a7a0-adc8-4e8f-b827-6f35a2423f12-0-1400x919.jpg',
      ingredients: 'Огурец томат лук конфета',
      instruction: 'Ссылка на инструкцию',
      time: '70min',
      ingredientsScale: '4',
    },
    {
      name: 'Название рецепта',
      img: 'https://realfood.tesco.com/media/images/RFO-LargeHero-1400x919-CarrotGingerSoup1-bb83a7a0-adc8-4e8f-b827-6f35a2423f12-0-1400x919.jpg',
      ingredients: 'Огурец томат лук конфета',
      instruction: 'Ссылка на инструкцию',
      time: '70min',
      ingredientsScale: '4',
    },
    {
      name: 'Название рецепта',
      img: 'https://realfood.tesco.com/media/images/RFO-LargeHero-1400x919-CarrotGingerSoup1-bb83a7a0-adc8-4e8f-b827-6f35a2423f12-0-1400x919.jpg',
      ingredients: 'Огурец томат лук конфета',
      instruction: 'Ссылка на инструкцию',
      time: '70min',
      ingredientsScale: '4',
    },
    {
      name: 'Название рецепта',
      img: 'https://realfood.tesco.com/media/images/RFO-LargeHero-1400x919-CarrotGingerSoup1-bb83a7a0-adc8-4e8f-b827-6f35a2423f12-0-1400x919.jpg',
      ingredients: 'Огурец томат лук конфета',
      instruction: 'Ссылка на инструкцию',
      time: '70min',
      ingredientsScale: '4',
    },
    {
      name: 'Название рецепта',
      img: 'https://realfood.tesco.com/media/images/RFO-LargeHero-1400x919-CarrotGingerSoup1-bb83a7a0-adc8-4e8f-b827-6f35a2423f12-0-1400x919.jpg',
      ingredients: 'Огурец томат лук конфета',
      instruction: 'Ссылка на инструкцию',
      time: '70min',
      ingredientsScale: '4',
    },
  ]; // это типо то, что мы получили с юзэффекта
  return (
    <div className='row'>
      {recipes?.map((recipe) => (
        <OneRecipe key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
