import React from "react";
import Header from "../Header/Header";
import useNowPlayingMovies from "../../utils/Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import ListContainer from "./ListContainer";
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <ListContainer />
    </div>
  );
};

export default Browse;
