import React from "react";
import Header from "../Header/Header";
import useNowPlayingMovies from "../../utils/Hooks/useNowPlayingMovies";
import useTopRatedMovies from "../../utils/Hooks/useTopRatedMovies";
import usePopularMovies from "../../utils/Hooks/usePopularMovies";
import useUpcomingMovies from "../../utils/Hooks/useUpcomingMovies";
import MainContainer from "./MainContainer";
import ListContainer from "./ListContainer";
const Browse = () => {
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <ListContainer />
    </div>
  );
};

export default Browse;
