class DataSource {
  static searchMovie(keyword) {
    return fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=a7a776a2080c86401df6ef0c6d2458ea&query=${keyword}`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }

  static getMovieDetail(movieId) {
    const apiKey = "a7a776a2080c86401df6ef0c6d2458ea";
    const baseUrl = "https://api.themoviedb.org/3";

    return fetch(`${baseUrl}/movie/${movieId}?api_key=${apiKey}&language=en-US`)
      .then((response) => {
        return response.json();
      })
      .then((movieDetail) => {
        return Promise.resolve(movieDetail);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}

export default DataSource;
