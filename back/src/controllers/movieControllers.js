const movieService = require("../services/moviesService");

module.exports = {
  movieCont: async (req, res) => {
    try {
      const movies = await movieService.getMovies();
      res.json(movies);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  geMovieByTitle: async (req, res) => {
    try {
      const { title } = req.body;
      const movie = await movieService.getMoviesByName(title);
      res.json(movie);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getMovieById: async (req, res) => {
    try {
      const { id } = req.params;
      const movie = await movieService.getMoviesById(id);
      res.json(movie);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createMovieController: async (req, res) => {
    try {
      const { title, year, director, duration, genre, rate, poster } = req.body;
      const newMovie = await movieService.postMovie({
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster,
      });
      res
        .status(201)
        .json({ message: "Movie created successfully", movie: newMovie });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
