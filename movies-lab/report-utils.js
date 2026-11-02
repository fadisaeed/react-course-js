export const getDirectorLine = movie => `Director:${movie.director.name}`;

export const getShortMovies = movies =>
  movies.filter(movie =>
    movie.duration < 100
);

export const findByTitle = (movies,title) =>
  movies.find(movie => movie.title === title);

export const getOscarsLine = movie => `Oscars:${movie.awards?.oscars??"This movie has no awards"}`;

export const sortByYear = movies => [...movies].sort((a,b) => a.year - b.year);

export const markAsWatched = (movies, id) => {
  const movie = movies.map(movie => {
    if(movie.id === id)
    {
       return {...movie,watched:true};
    }
    else
    {
        return movie;
    }
})};

export const renameActor = (movie, index, newName) => {
  const copy = movie.cast.map((actor,i)=>
{
  if(index===i)
  {
      return {...actor,name:newName};
  }
  else
  {
      return actor;
  }

})
   return { ...movie, cast: copy };
};
