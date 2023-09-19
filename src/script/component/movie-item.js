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

    const posterURL = poster_path
      ? `https://tmdb.org/t/p/w500/${poster_path}`
      : "../public/image-not-found.jpg";

    const imageElement = document.createElement("img");
    imageElement.classList.add("card-img-top");

    // Menambahkan event listener untuk mendeteksi jika gambar gagal dimuat
    imageElement.onerror = () => {
      // Gambar tidak berhasil dimuat, ganti dengan gambar placeholder
      this.src = "../public/image-not-found.jpg";
    };

    // Set src pada elemen img setelah menambahkan event listener onerror
    imageElement.src = posterURL;

    this.innerHTML = `
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${release_date}</h6>
      <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal"
        data-target="#movieDetailModal-${id}" data-dbid=${id}>Show Detail</a>
    </div>
  </div>
`;

    // Menambahkan elemen <img> ke dalam card
    const card = this.querySelector(".card");
    card.prepend(imageElement);

    // const placeholderURL =
    //   "https://via.placeholder.com/500x750.png?text=Image+Not+Found";

    // const { id, title, poster_path, release_date } = this._movie;

    // const posterUrl = poster_path
    //   ? `https://tmdb.org/t/p/w500/${poster_path}`
    //   : placeholderURL;

    // this.innerHTML = `
    //   <div class="card">
    //     <img src="${posterUrl}" class="card-img-top">
    //     <div class="card-body">
    //       <h5 class="card-title">${title}</h5>
    //       <h6 class="card-subtitle mb-2 text-muted">${release_date}</h6>
    //       <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal"
    //         data-target="#movieDetailModal-${id}" data-dbid=${id}>Show Detail</a>
    //     </div>
    //   </div>
    // `;

    const modalDetailButton = this.querySelector(".modal-detail-button");
    modalDetailButton.addEventListener("click", (event) => {
      const buttonId = event.target.getAttribute("data-dbid");

      console.log("ID tombol yang diklik:", buttonId);

      const showDetailEvent = new CustomEvent("showDetail", {
        detail: {
          movieId: buttonId,
        },
      });

      document.dispatchEvent(showDetailEvent);
    });
  }
}

customElements.define("movie-item", MovieItem);
