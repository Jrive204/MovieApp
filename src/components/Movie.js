import React from 'react';
import { useParams } from 'react-router-dom';
import Navigation from './elements/Navigation';
import MovieInfo from './elements/MovieInfo';
import Actor from './elements/Actor';
import MovieInfoBar from './elements/MovieInfoBar';
import Grid from './elements/Grid';
import Spinner from './elements/Spinner';

//custom hook

import { useMovieFetch } from './hooks/useMovieFetch';

const Movie = () => {
  const { mid } = useParams();
  const [movie, loading, error] = useMovieFetch(mid);
  console.log(mid, `movieID`);

  if (error) return <div>something went wrong ..</div>;
  if (loading) return <Spinner />;

  return (
    <>
      <Navigation movie={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header='Actors'>
        {movie?.actors?.map((actor) => (
          <Actor key={actor.credit_id} actor={actor} />
        ))}
      </Grid>
    </>
  );
};

export default Movie;
