import "../component/search-movie.js";
import "../component/movie-list.js";

import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("search-movie");
  const movieListElement = document.querySelector("movie-list");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchMovie(searchElement.value);

      if (result.length > 0) {
        movieListElement.movies = result;
      } else {
        movieListElement.setresultError("Film tidak ditemukan");
      }
    } catch (message) {
      movieListElement.setresultError(message);
    }
  };

  searchElement.clickEvent = onButtonSearchClicked;

  const movieDetailButton = movieListElement.querySelector(".modal-detail-button");

  movieDetailButton.addEventListener("click", async (event) => {
    const movieId = event.target.getAttribute("data-dbid");

    try {
      const movieDetail = await DataSource.getMovieDetail(movieId);

      movieModal.movie = movieDetail;
      $("#movieDetailModal").modal("show");
    } catch (error) {
      console.error(error);
    }
  });
};

export default main;
