//*******funcion para crear los elementos del DOM ********/
function createElements(movie) {
  //asociamos las propiedades de una película con los tipos de elementos
  const elements = {
    poster: "img",
    title: "h4",
    year: "h6",
    director: "h6",
    genre: "h6",
    rate: "h6",
  };
  const labels = {
    title: "Title: ",
    year: "Year: ",
    director: "Director: ",
    genre: "Genre: ",
    rate: "Rate: ",
  };

  // Crear contenedor de película
  const movieDiv = document.createElement("div");
  movieDiv.classList.add("movie-container");

  // Crear y agregar elementos al DIV

  for (const key in elements) {
    //por cada element se creamos un elemento en el DOM
    const element = document.createElement(elements[key]);
    //basandonos en el key definimos como vamos a mostrar esos elementos
    switch (key) {
      case "genre":
        element.innerHTML = labels[key] + movie[key].join(", ");
        break;
      case "poster":
        element.src = movie.poster;
        break;
      default:
        element.innerHTML = labels[key] + movie[key];
        break;
    }

    movieDiv.appendChild(element);
  }

  return movieDiv;
}

module.exports = createElements;
