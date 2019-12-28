import React, { useState, useEffect } from "react";
import {
  API_URL,
  API_KEY,
  API_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE
} from "../config";

// Import components
import SearchBar from "./elements/SearchBar";
import Grid from "./elements/Grid";
import MovieThumb from "./elements/MovieThumb";
import Spinner from "./elements/Spinner";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import HeroImage from "./elements/HeroImage";

//custom hook
import { useHomeFetch } from "./hooks/useHomeFetch";
const Home = () => {
  const [{ state, loading, error }, fetchMovies] = useHomeFetch();
  console.log(state, `state`);
  return (
    <>
      <HeroImage />
      <SearchBar />
      <Grid />
      <MovieThumb />
      <Spinner />
      <LoadMoreBtn />
    </>
  );
};
export default Home;
