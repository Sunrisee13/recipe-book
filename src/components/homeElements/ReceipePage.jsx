import React from "react";

export default function ReceipePage({ oneRecipePage, setOneRecipePage }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto mx-md-5">
          <h1>{oneRecipePage.name}</h1>
          <img
            src={oneRecipePage.img}
            alt={oneRecipePage.name}
            style={{ width: "100%" }}
          />
          <h3>Список ингридиентов</h3>
          <div>{oneRecipePage.ingredients}</div>
          <div>{oneRecipePage.time}</div>
          <a href={oneRecipePage.instruction}>Перейти к инструкции</a>
          <button type="button" onClick={() => setOneRecipePage({ name: "" })}>
            Назад
          </button>
        </div>
      </div>
    </div>
  );
}
