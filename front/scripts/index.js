const axios = require("axios");
const resetAndAdd = require("./resetAndAdd");
const displayMoviesInDOM = require("./displayMoviesInDOM");

//  *****funcion para obtener las peliculas de un servidor con jquery ******
// const addmovie = () => {
//   //utilizamos get para acceder al servidor
//   $.get("https://students-api.2.us-1.fl0.io/movies", (data, status) => {
//     displayMoviesInDOM(data);
//   });
// };

// //llamamos a la funcion para mostrar las pelis
// addmovie();
//  *****funcion para obtener las peliculas de un servidor con axios ******
// const promise = axios.get("https://students-api.2.us-1.fl0.io/movies");

//  *****funcion para obtener las peliculas de un servidor con axios (promise)******
// promise.then((result) => {
//   displayMoviesInDOM(result.data);
// }).catch((err) => {
//   console.error("Error al obtener datos:", err);
// });
//  *****funcion para obtener las peliculas de un servidor con axios (async/await)******

const postData = async () => {
  try {
    const movie = resetAndAdd.movieInfo();
    const response = await axios.post("http://localhost:3000/movies", movie);
    console.log("Movie created:", response.data);
  } catch (err) {
    console.error("Error creating movie:", err);
  }
};
const fetchdata1 = async () => {
  try {
    const data = await axios.get("http://localhost:3000/movies");
    displayMoviesInDOM(data.data);
  } catch (err) {
    console.log(err.message);
  }
};

fetchdata1();

const createMovieButton = document.getElementById("createMovie");
if (createMovieButton) {
  console.log("Botón encontrado:", createMovieButton);
  createMovieButton.addEventListener("click", postData);
} else {
  console.log("No existe");
}

const reseteMovieButton = document.getElementById("reset-Imputs");
if (createMovieButton) {
  console.log("Botón encontrado:", reseteMovieButton);
  reseteMovieButton.addEventListener("click", resetAndAdd.resetForm);
} else {
  console.log("No existe");
}
