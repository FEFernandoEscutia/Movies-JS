const Movie = require("../Models/Movie");
class Movies {
  constructor(title, year, director, duration, genre, rate, poster) {
    if (!title || !year || !director) {
      throw new Error("Title, year and director are required");
    }
    this.title = title;
    this.year = year;
    this.director = director;
    this.duration = duration;
    this.genre = genre;
    this.rate = rate;
    this.poster = poster;
  }
}

module.exports = {
  getMovies: async () => {
    // const response = await axios.get(
    //   "https://students-api.2.us-1.fl0.io/movies"
    // );
    const movieData = await Movie.find();
    const movies = movieData.map((movie) => {
      return new Movies(
        movie.title,
        movie.year,
        movie.director,
        movie.duration,
        movie.genre,
        movie.rate,
        movie.poster
      );
    });
    return movies;
  },

  getMoviesById: async (id) => {
    const movie = await Movie.findById(id);
    return movie;
  },

  getMoviesByName: async (title) => {
    const movie = await Movie.findOne({title});
    return movie;
  },

  postMovie: async (movie) => {
    const newMovie = await Movie.create(movie);
    return newMovie;
  },
};
