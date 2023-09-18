import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import "./style/style.css";
import "./script/component/app-bar.js";
import "./script/component/app-hero.js";
import "./script/component/search-movie.js";
import "./script/component/movie-list.js";
import "./script/component/movie-item.js";
import "./script/component/movie-detail.js";
import main from "./script/view/main.js";

document.addEventListener("DOMContentLoaded", main);
