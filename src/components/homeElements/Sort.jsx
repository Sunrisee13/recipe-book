import React from "react";

export default function Sort({ setRecipes }) {
  function shuffle(arr) {
    const array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function shuffleHandler() {
    setRecipes((prev) => shuffle(prev));
  }

  function ingrHandler() {
    setRecipes((prev) => {
      return [...prev].sort((a, b) => a.ingredientsScale - b.ingredientsScale);
    });
  }

  function timeHandler() {
    setRecipes((prev) => {
      return [...prev].sort((a, b) => a.time - b.time);
    });
  }

  return (
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Сортировка
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <a class="dropdown-item" onClick={timeHandler}>
            по времени приготовления
          </a>
        </li>
        <li>
          <a class="dropdown-item" onClick={ingrHandler}>
            По количеству ингридиентов
          </a>
        </li>
        <li>
          <a class="dropdown-item" onClick={shuffleHandler}>
            Перемешать
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="/">
            Обновить
          </a>
        </li>
      </ul>
    </div>
  );
}