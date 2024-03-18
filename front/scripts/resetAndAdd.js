

module.exports = {
    movieInfo: () => {
        const title = document.getElementById("Title");
        const year = document.getElementById("Year");
        const director = document.getElementById("Director");
        const duration = document.getElementById("Duration");
        const genre = document.getElementById("inputGenre");
        const rate = document.getElementById("Rate");
        const poster = document.getElementById("Poster");
    
        const titleInfo = title.value;
        const yearInfo = year.value;
        const directorInfo = director.value;
        const durationInfo = duration.value;
        const selectedGenres = [];
        const options = genre.options;
        for (let i = 0; i < options.length; i++) {
          if (options[i].selected) {
            selectedGenres.push(options[i].value);
          }
        }
        const rateInfo = rate.value;
        const posterInfo = poster.value;
    
        if (
          titleInfo === "" ||
          yearInfo === "" ||
          directorInfo === "" ||
          durationInfo === "" ||
          selectedGenres.length === 0 ||
          rateInfo === "" ||
          posterInfo === ""
        ) {
          alert("Please fill all the fields");
          return;
        }
        const movieData = {
          title: titleInfo,
          year: yearInfo,
          director: directorInfo,
          duration: durationInfo,
          genre: selectedGenres,
          rate: rateInfo,
          poster: posterInfo,
        };
        console.log(movieData);
    
        return movieData;
      },
      
    
      resetForm: () => {
        const element = {
          title: document.getElementById("Title"),
          year: document.getElementById("Year"),
          director: document.getElementById("Director"),
          duration: document.getElementById("Duration"),
          rate: document.getElementById("Rate"),
          poster: document.getElementById("Poster"),
        };
        const genre = document.getElementById("inputGenre");
        genre.options = []
        for (const key in element) {
          element[key].value = "";
        }
    
        location.reload();
        
        return element;
      },
}