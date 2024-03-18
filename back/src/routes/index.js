const { Router } = require("express");
const moviesRouter = require("./movies.Route");
const router = Router();

router.use("/movies", moviesRouter);

module.exports = router;
