const { Router } = require("express");
const moviesRouter = Router();
const validateMovie = require("../middleWares/validator");
const movieControllers = require("../controllers/movieControllers");

moviesRouter.get("/", movieControllers.movieCont);
moviesRouter.get("/byTitle", movieControllers.geMovieByTitle);
moviesRouter.get("/:id", movieControllers.getMovieById);
moviesRouter.post("/",validateMovie, movieControllers.createMovieController);

module.exports = moviesRouter;
