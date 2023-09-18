class MovieDetail extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    const {
      id,
      title,
      poster_path,
      release_date,
      overview,
      genres,
      production_companies,
      status,
    } = this._movie;

    const statusText = status ? status : "Tidak tersedia";
    const genreList =
      Array.isArray(genres) && genres.length > 0
        ? genres.map((genre) => genre.name).join(", ")
        : "Tidak tersedia";
    const companyList =
      Array.isArray(production_companies) && production_companies.length > 0
        ? production_companies.map((company) => company.name).join(", ")
        : "Tidak tersedia";

    this.innerHTML = `
        <div class="modal fade" id="movieDetailModal-${id}" tabindex="-1" aria-labelledby="movieDetailModalLabel-${id}" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="movieDetailModalLabel">Movie Detail</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="container">
                  <div class="row">
                    <div class="col-md-3">
                      <img src="https://tmdb.org/t/p/w500/${poster_path}" class="img-fluid" width="200px" alt="${title}">
                    </div>
                    <div class="col-md-9">
                      <ul class="list-group">
                        <li class="list-group-item">
                          <h4>${title} (${release_date})</h4>
                        </li>
                        <li class="list-group-item"><strong>Release : </strong>${release_date}</li>
                        <li class="list-group-item"><strong>Description : </strong>${overview}</li>
                        <li class="list-group-item"><strong>Status : </strong>${statusText}</li>
                        <li class="list-group-item"><strong>Genres : </strong>${genreList}</li>
                        <li class="list-group-item"><strong>Production : </strong>${companyList}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      `;
  }
}

customElements.define("movie-detail", MovieDetail);
