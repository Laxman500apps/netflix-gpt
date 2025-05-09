import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const ListContainer = () => {
  const { nowPlayingMovies, upcomingMovies, topRatedMovies, popularMovies } =
    useSelector((store) => store.movies || {});

  const movieCategories = [
    { title: "Now Playing", movies: nowPlayingMovies },
    { title: "Upcoming", movies: upcomingMovies },
    { title: "Top Rated", movies: topRatedMovies },
    { title: "Popular", movies: popularMovies },
  ];

  return (
    <div className="bg-black p-4">
      <div className="-mt-16">
        {movieCategories.map(
          ({ title, movies }) =>
            movies?.length > 0 && (
              <MoviesList key={title} title={title} movies={movies} />
            )
        )}
      </div>
    </div>
  );
};

export default ListContainer;
