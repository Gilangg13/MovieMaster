import "./movie-item.js";

class MovieList extends HTMLElement {
  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  set eventDetail(event) {
    this._eventDetail = event;
  }

  setresultError(message) {
    this._message = message;
    this.innerHTML = `
        <style>
            .img-search-not-found {
                text-align: center;
                margin-bottom: 10px;
            }
            .img-search-not-found img {
                width: 360px;
                height: 360px;
            }
        </style>

        <div class="img-search-not-found">
            <img src="" alt="">
            <h3>${message}</h3>
        </div>
    `;
  }

  render() {
    this.innerHTML = "";

    const container = document.createElement("div");
    container.classList.add("container");

    const row = document.createElement("div");
    row.classList.add("row", "flex-wrap");

    container.appendChild(row);

    this._movies.forEach((movie) => {
      const movieItemElement = document.createElement("div");
      movieItemElement.classList.add("col-md-3", "my-3");
      movieItemElement.innerHTML = `
        <movie-item data-dbid="${movie.id}"></movie-item>
      `;

      movieItemElement.querySelector("movie-item").movie = movie;
      row.appendChild(movieItemElement);
    });

    this.appendChild(container);
  }

  renderError(message) {
    this.innerHTML = `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0, 0, 0, 0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
        </style>
    `;

    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define("movie-list", MovieList);
