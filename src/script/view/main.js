import "../component/search-movie.js";
import "../component/movie-list.js";
import "../component/movie-detail.js";

import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("search-movie");
  const movieListElement = document.querySelector("movie-list");
  const movieModal = document.querySelector("movie-detail");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchMovie(searchElement.value);

      if (result.length > 0) {
        movieListElement.movies = result;
      } else {
        movieListElement.setResultError("Film tidak ditemukan");
      }
    } catch (message) {
      movieListElement.setResultError(message);
    }
  };

  searchElement.clickEvent = onButtonSearchClicked;

  document.addEventListener("showDetail", async (event) => {
    const movieId = event.detail.movieId;

    try {
      const movieDetail = await DataSource.getMovieDetail(movieId);
      movieModal.movie = movieDetail;

      $(`#movieDetailModal-${movieId}`).modal("show");

      console.log(movieId);
      console.log(movieDetail);
    } catch (error) {
      console.error(error);
    }
  });
};

export default main;
