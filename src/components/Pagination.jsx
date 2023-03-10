import React from 'react';

export default function Pagination({
  currentPage,
  setCurrentPage,
  allPages,
  setAllPages,
  setRecipes,
}) {
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

  function resHits(res) {
    return res.hits.map((el) => ({
      name: el.recipe.label,
      img: el.recipe.image,
      ingredients: el.recipe.ingredients.map((ell) => ell.food).toString(),
      instruction: el.recipe.url,
      time: Math.floor(Math.random() * 12 + 6) * 5,
      ingredientsScale: el.recipe.ingredients.map((elll) => elll.food).length,
    }));
  }

  function checkPage(page) {
    switch (page) {
      case '1': {
        if (allPages.page1.length === 0) {
          fetch(
            `https://api.edamam.com/api/recipes/v2?type=public&beta=false&q=${category()}&app_id=ea8b9ed4&app_key=%20dd76fee58274a583ce5ee3e916c01595%09&random=true`
          )
            .then((res) => res.json())

            .then((res) => {
              setAllPages((prev) => ({
                ...prev,
                page1: resHits(res),
              }));
              setRecipes(resHits(res));
            });
        } else {
          setRecipes(allPages.page1);
        }
        break;
      }

      case '2': {
        if (allPages.page2.length === 0) {
          fetch(
            `https://api.edamam.com/api/recipes/v2?type=public&beta=false&q=${category()}&app_id=ea8b9ed4&app_key=%20dd76fee58274a583ce5ee3e916c01595%09&random=true`
          )
            .then((res) => res.json())

            .then((res) => {
              console.log(res);
              setAllPages((prev) => ({ ...prev, page2: resHits(res) }));
              setRecipes(resHits(res));
            });
        } else {
          setRecipes(allPages.page2);
        }
        break;
      }
      case '3': {
        if (allPages.page3.length === 0) {
          fetch(
            `https://api.edamam.com/api/recipes/v2?type=public&beta=false&q=${category()}&app_id=ea8b9ed4&app_key=%20dd76fee58274a583ce5ee3e916c01595%09&random=true`
          )
            .then((res) => res.json())

            .then((res) => {
              setAllPages((prev) => ({ ...prev, page3: resHits(res) }));
              setRecipes(resHits(res));
            });
        } else {
          setRecipes(allPages.page3);
        }
        break;
      }
      case '4': {
        if (allPages.page4.length === 0) {
          fetch(
            `https://api.edamam.com/api/recipes/v2?type=public&beta=false&q=${category()}&app_id=ea8b9ed4&app_key=%20dd76fee58274a583ce5ee3e916c01595%09&random=true`
          )
            .then((res) => res.json())

            .then((res) => {
              setAllPages((prev) => ({ ...prev, page4: resHits(res) }));
              setRecipes(resHits(res));
            });
        } else {
          setRecipes(allPages.page4);
        }
        break;
      }
      case '5': {
        if (allPages.page5.length === 0) {
          fetch(
            `https://api.edamam.com/api/recipes/v2?type=public&beta=false&q=${category()}&app_id=ea8b9ed4&app_key=%20dd76fee58274a583ce5ee3e916c01595%09&random=true`
          )
            .then((res) => res.json())

            .then((res) => {
              setAllPages((prev) => ({ ...prev, page5: resHits(res) }));
              setRecipes(resHits(res));
            });
        } else {
          setRecipes(allPages.page5);
        }
        break;
      }
      default:
        break;
    }
  }

  const pages = ['1', '2', '3', '4', '5'];
  return (
    <nav aria-label='Page navigation example'>
      <ul className='pagination pagination-lg justify-content-center'>
        {pages.map((el) => (
          <li key={el} className='page-item'>
            <button
              onClick={() => {
                setCurrentPage(el);
                checkPage(el);
              }}
              type='button'
              className={el === currentPage ? 'page-link active' : 'page-link'}
            >
              {el}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
