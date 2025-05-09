import React from "react";
import Header from "../Header/Header";
import useNowPlayingMovies from "../../utils/Hooks/useNowPlayingMovies";
import useTopRatedMovies from "../../utils/Hooks/useTopRatedMovies";
import usePopularMovies from "../../utils/Hooks/usePopularMovies";
import useUpcomingMovies from "../../utils/Hooks/useUpcomingMovies";
import MainContainer from "./MainContainer";
import ListContainer from "./ListContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
const Browse = () => {
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies();
  const showGpt = useSelector((store) => store?.gpt?.showGpt);
  return (
    <div>
      <Header />
      {showGpt ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <ListContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
