const createElements = require("./createElements");

// *****funcion para mostrar los elementos de la pelicula ******
displayMoviesInDOM = (movieData) => {
  //seleccionamos el contenedor en donde se van a mostrar
  const movieContainer = document.querySelector(".M2-Section-02");
  movieContainer.innerHTML = "";
  //creamos elementos HTML para cada película
  movieData.forEach((movie) => {
    const movieDiv = createElements(movie);
    movieContainer.appendChild(movieDiv);
  });
};

module.exports = displayMoviesInDOM;
