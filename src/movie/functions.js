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
    const results = await Movie.findAll({where:{title: movieObj.title}});
    console.log(results);
  }
  catch(error) {
    console.log(error);
  }
};

exports.updateMovie = async (movieObj) => {
  try{
    await Movie.update({title: movieObj.newTitle, actor: movieObj.newActor}, 
      {where:{title: movieObj.title, actor: movieObj.actor}});
  }
  catch(error) {
    console.log(error);
  }
};

exports.deleteMovie = async (movieObj) => {
  try{
    await Movie.destroy({where:{title: movieObj.title}});
  }
  catch(error) {
    console.log(error);
  }
};