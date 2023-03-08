import React from "react";

export default function Register() {
  async function submitHandler(e) {
    e.preventDefault();
    fetch("/auth/reg", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });
  }
  return (
    <form onSubmit={submitHandler}>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
          <input
            name="email"
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </label>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Login
        </label>
        <input
          name="login"
          type="text"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Password
        </label>
        <input
          name="password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
