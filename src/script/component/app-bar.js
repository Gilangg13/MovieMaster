class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav class="navbar navbar-expand-md bg-primary sticky-top mynavbar">
            <div class="container">
                <a class="navbar-brand" href="#">Movie Master</a>
                <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Movie Master</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <div class="navbar-nav ms-auto">
                            <a class="nav-link active" href="#home">Beranda</a>
                            <a class="nav-link" href="#news">News</a>
                            <a class="nav-link" href="#genre">Genre</a>
                            <a class="nav-link" href="#more">More</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    `;
  }
}

customElements.define("app-bar", AppBar);
