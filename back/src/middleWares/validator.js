

const validateMovie = (req, res, next) => {
  const { title, year, director, duration, genre, rate, poster } = req.body;
  
  if (!title.trim() || !year || !director.trim() || !duration.trim() || !genre || !rate || !poster.trim()) {
    return res.status(400).json({
      message: "missing required fields or empty values",
    });
  } else {
    next();
  }
  };
  
  module.exports = validateMovie;
  