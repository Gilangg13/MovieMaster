class AppHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="hero-section text-center mb-5">
            <div class="container">
                <h1>Selamat Datang di MovieMaster</h1>
                <p>Temukan dan jelajahi dunia film dengan mudah.</p>
            </div>
        </section>
    `;
  }
}

customElements.define("app-hero", AppHero);
