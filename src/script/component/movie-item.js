class MovieItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    const { id, title, poster_path, release_date } = this._movie;

    this.innerHTML = `
      <div class="card">
        <img src="https://tmdb.org/t/p/w500/${poster_path}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${release_date}</h6>
          <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal"
            data-target="#movieDetailModal-${id}" data-dbid=${id}>Show Detail</a>
        </div>
      </div>
    `;

    const modalDetailButton = this.querySelector(".modal-detail-button");
    modalDetailButton.addEventListener("click", () => {
      const movieDetailElement = document.querySelector("movie-detail");
      const buttonId = event.target.getAttribute("data-dbid");

      console.log("ID tombol yang diklik:", buttonId);

      if (movieDetailElement) {
        movieDetailElement.movie = this._movie;
        $("#movieDetailModal-" + buttonId).modal("show");
      }
    });
  }
}

customElements.define("movie-item", MovieItem);
