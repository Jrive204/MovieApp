import React from "react";
import { StyledMovieThumb } from "../styles/StyledMovieThumb";
import { Link } from "react-router-dom";

const MovieThumb = ({ image, clickable, movieId }) => {
  return (
    <StyledMovieThumb>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <img className='clickable' src={image} alt='movieThumb' />
        </Link>
      ) : (
        <img src={image} alt='moviethumb' />
      )}
    </StyledMovieThumb>
  );
};
export default MovieThumb;
