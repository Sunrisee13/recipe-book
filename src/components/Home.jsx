import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Pagination from './Pagination';
import OneRecipe from './homeElements/OneRecipe';
import ReceipePage from './homeElements/ReceipePage';
import Sort from './homeElements/Sort';

export default function Home({ user }) {
  const [recipes1, setRecipes] = useState([]);
  const category = () => {
    const hardCodeCategoryFood = [
      'soup',
      'salad',
      'burger',
      'paste',
      'meat',
      'drink',
      'cake',
      'bread',
      'cereals',
      'desserts',
      'preserve',
      'preps',
      'sandwiches',
      'starter',
    ];
    const random = Math.floor(Math.random() * hardCodeCategoryFood.length);
    return hardCodeCategoryFood[random];
  };

  const { page } = useParams();

  const [currentPage, setCurrentPage] = useState('1');
  // const [page1, setPage1] = useState([]);
  // const [page2, setPage2] = useState([]);
  // const [page3, setPage3] = useState([]);
  // const [page4, setPage4] = useState([]);
  // const [page5, setPage5] = useState([]);

  const [allPages, setAllPages] = useState({
    page1: [],
    page2: [],
    page3: [],
    page4: [],
    page5: [],
  });

  useEffect(() => {
    fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&beta=false&q=${category()}&app_id=ea8b9ed4&app_key=%20dd76fee58274a583ce5ee3e916c01595%09&random=true`
    )
      .then((res) => res.json())

      .then((res) => {
        // setRecipes((prev) => ({
        //   ...prev,
        //   page1: res.hits.map((el) => ({
        //     name: el.recipe.label,
        //     img: el.recipe.image,
        //     ingredients: el.recipe.ingredients
        //       .map((ell) => ell.food)
        //       .toString(),
        //     instruction: el.recipe.url,
        //     time: Math.floor(Math.random() * 12 + 6) * 5,
        //     ingredientsScale: el.recipe.ingredients.map((elll) => elll.food)
        //       .length,
        //   })),
        // }));
        const obj = res.hits.map((el) => ({
          name: el.recipe.label,
          img: el.recipe.image,
          ingredients: el.recipe.ingredients.map((ell) => ell.food).toString(),
          instruction: el.recipe.url,
          time: Math.floor(Math.random() * 12 + 6) * 5,
          ingredientsScale: el.recipe.ingredients.map((elll) => elll.food)
            .length,
        }));
        setRecipes(obj);
        setAllPages((prev) => ({
          ...prev,
          page1: obj,
        }));
        // setAllPages((prev) => ({
        //   ...prev,
        //   page1: recipes1,
        // }));
      });
    // .then((data) => setPosts(data));
  }, []);

  const [oneRecipePage, setOneRecipePage] = useState({
    name: '',
    img: '',
    ingredients: '',
    instruction: '',
    time: '',
    ingredientsScale: '',
  });

  return (
    <div class="page">
      {oneRecipePage.name ? (
        <ReceipePage
          oneRecipePage={oneRecipePage}
          setOneRecipePage={setOneRecipePage}
          user={user}
        />
      ) : (
        <>
          <Sort setRecipes={setRecipes} />
          <div className='row'>
            {recipes1?.map((recipe) => (
              <OneRecipe
                key={recipe.name}
                recipe={recipe}
                setOneRecipePage={setOneRecipePage}
                user={user}
              />
            ))}
          </div>
          <div className='col-12'>
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              allPages={allPages}
              setAllPages={setAllPages}
              setRecipes={setRecipes}
            />
          </div>
          <footer></footer>
        </>
      )}
    </div>
  );
}
