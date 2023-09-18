class SearchMovie extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#search-input").value;
  }

  render() {
    this.innerHTML = `
        <style>
            .search-container {
                text-align: center;
                margin-top: 20px;
            }

            #search-input {
                padding: 12px;
                width: 60%;
                border: 1px solid #ccc;
                border-radius: 10px;
                font-size: 16px;
            }

            #search-button {
                padding: 10px 20px;
                color: #1d5d9b;
                border-radius: 10px;
                font-size: 16px;
            }
        </style>

        <div class="search-container container mb-5">
            <div class="input-group mb-3">
                <input type="search" class="form-control" id="search-input" placeholder="Masukan Judul Film">
                <button class="btn btn-outline-primary" type="submit" id="search-button">Cari
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </div>
    `;

    this.querySelector("#search-button").addEventListener(
      "click",
      this._clickEvent
    );
  }
}

customElements.define("search-movie", SearchMovie);
