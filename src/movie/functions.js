const Movie = require("./table");

exports.createMovie = async (movieObj) => {
  try {
    const newMovie = await Movie.create(movieObj);
    console.log(newMovie);
  } 
  catch (error) {
    console.log(error);
  }
};

exports.readMovie = async (movieObj) => {
  try {
    const results = await Movie.findAll()
    console.log(results);
  }
  catch (error) {
    console.log(error);
  }
};

exports.filterMovie = async (movieObj) => {
  try{
    if (movieObj.title) {
      const results = await Movie.findAll({where:{title: movieObj.title}});
      console.log(results);
    }
    else if (movieObj.actor) {
      const results = await Movie.findAll({where:{actor:movieObj.actor}});
      console.log(results);
    }
    else {
      console.log("Please enter --movie or --actor you wish to filter by")
    }
  }
  catch(error) {
    console.log(error);
  }
};

exports.updateMovie = async (movieObj) => {
  try{
    if (movieObj.title) {
      await Movie.update({title: movieObj.newTitle}, {where:{title: movieObj.title}});
      console.log(`The Movie ${movieObj.title} will now be called ${movieObj.newTitle} which is a far better name`)
      console.log('Marketing is now updating all promotional material...')
    }
    else if (movieObj.actor) {
      await Movie.update({actor: movieObj.newActor}, {where:{actor: movieObj.actor}});
      console.log(`${movieObj.actor} has been fired, ${movieObj.newActor} is now in the role`)
      console.log('HR is now processing the change...')
    }
    else {
      console.log("Please enter either --title and --newTitle or")
      console.log("--actor and --newActor")
    }
  }
  catch(error) {
    console.log(error);
  }
};

exports.deleteMovie = async (movieObj) => {
  try{
    // let title = movieObj.title
    await Movie.destroy({where:{title: movieObj.title}});
    console.log(`${movieObj.title} has been destroyed!  Wiped of the face of the...   Database`)
  }
  catch(error) {
    console.log(error);
  }
};