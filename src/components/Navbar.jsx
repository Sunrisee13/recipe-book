import React from "react";

export default function Navbar({ user }) {
  async function logoutHandler() {
    const res = await fetch("/auth/logout", { method: "POST" });
    if (res.status === 200) window.location = "/";
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="logo">
          <img src="img/cake.png" alt="" />
        </div>
        <div className="container-fluid navbar">
          <a className="navbar-brand " href="/" id="title">
            Книга рецептов
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {user ? (
              <>
                <div id="hi-name">Hi, {user.login}</div>
                <button
                  className="btn btn-outline-primary ms-10 m-2"
                  type="button"
                  onClick={() => {
                    window.location = "/favourite";
                  }}
                >
                  Избранное
                </button>
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={logoutHandler}
                >
                  Выйти
                </button>
              </>
            ) : (
              <>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <button className="btn btn-primary">Войти</button>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="/reg">
                          Зарегистрироваться
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/auth">
                          Уже есть логин
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
